const xlsx = require('xlsx')
const Ata = require('../models/Ata');
const { Op } = require('sequelize');


module.exports = {
    async store(req, res) {
        var { ...new_document } = req.body;
        if(req.file){
            new_document = {pdf_link: req.file.filename, ...new_document }
            new_document = {location: 'documents', ...new_document }
        } else {
            new_document = {location: 'Arquivos', ...new_document }
        }
        
        await Ata.create(new_document);
        res.json({success: 'Created'})
    },
    async edit(req, res) {
        
        const { id } = req.params;
        const { ...ata_update } = req.body.ata;
        console.log(ata_update)
        try {
            await Ata.update(ata_update, { where: { id: id } }).then(rows_count => {
                Ata.findByPk(id).then(pet => {
                    res.status(200).json({ success: true });
                }).catch(erro => {
                    res.status(400).json({
                        success: false,
                        message: 'Ocorreu um erro inesperado'
                    });
                });
            }).catch(erro => {
                res.status(400).json({
                    success: false,
                    message: 'Ocorreu um erro inesperado'
                });
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Ocorreu um erro interno no servidor'
            });
        }
    },
    async ata(req, res) {
        const { id } = req.params;
        const ata = await Ata.findByPk(id);
        
        res.json(ata)
    },
    async search(req, res){
        const { busca } = req.params;
        const atas = await Ata.findAll({ 
            where: {
                [Op.or]: [
		    {id: busca},
                    {resumo: {[Op.like]: "%" + busca + "%"}}, 
                    {palavras_chave: { [Op.like]: "%" + busca + "%"}},
                    {gestao: { [Op.like]: "%" + busca + "%" }},
		    {colecao: { [Op.like]: "%" + busca + "%" }},
		    {observacao: { [Op.like]: "%" + busca + "%" }}
                ]
            },
	    order: [['id', 'DESC']]
        })

        res.json(atas);
    },
    async index(req, res) {
        
        const { page = 1 } = req.params;
        const { rows, count } = await Ata.findAndCountAll();
        var ata = await Ata.findAll({limit: 10, offset: (page - 1) * 10})
        
        
        return res.json({ ata, count })
        
    },
    async delete(req, res){
        const { id } = req.params;

        const ata = await Ata.findByPk(id);
        ata.destroy();

        res.json({ excluded: "Excluido" })
    }
};
