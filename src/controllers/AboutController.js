module.exports = {
    async index (req, res) {
        const about = 
            {
                'companyName': 'Tvorba Progresivnej webovej aplikacie',
                'companyPlace': 'Bratislava, Slovensko',
                'companySize': 12
            }
        res.status(200).json({
            content: about
        });
    }
}