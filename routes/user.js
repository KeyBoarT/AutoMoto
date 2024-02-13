const express = require('express');

const router = express.Router();

const admin = require('./admin');

qnas = [
    {
        question: 'Araç satın alma süreci nasıl işliyor?',
        answer: 'Araç satın alma sürecimiz oldukça basit ve kullanıcı dostudur. &Idot;lk olarak, müşterilerimiz araçlarımız arasından seçim yapabilir ve detaylı bilgi alabilirler. Daha sonra, satın alma süreciyle ilgili detayları görüşmek için ekibimizle iletişime geçebilirler. Finansman seçenekleri ve gereken belgeler konusunda da müşterilerimize rehberlik ediyoruz.'
    },

    {
        question: 'Galerinizde hangi tür araçlar bulunuyor?',
        answer: 'Galerimizde hatchback, sedan, SUV, crossover, spor araçlar ve daha birçok farklı türde araç bulunmaktadır. Müşterilerimizin farklı ihtiyaçlarını karşılamak için geniş bir araç yelpazesine sahibiz.'
    },

    {
        question: 'Araçlarınızın durumu ve geçmişi hakkında nasıl bilgi alabilirim?',
        answer: 'Her bir araç hakkında detaylı bilgi sunuyoruz. Araçların kilometreleri, model yılı, teknik özellikleri, geçmişi ve durumu gibi önemli bilgileri galerimizde bulabilirsiniz. Ayrıca isterseniz detaylı bir araç raporu da sunabiliriz.'
    },
]

router.get('/', (req, res, next) => {
    res.render('index', {title: 'Anasayfa', models: admin.models, path: '/', qnas: qnas});
});

module.exports = router;