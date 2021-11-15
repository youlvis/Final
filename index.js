
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
var cors = require('cors');
app.use(cors({origin: 'http://localhost:4200'}));

app.get('/fibonacci', function(req, res){
    n=req.query.numero;
    var a, b, ress;
    s = []
    a = 0;
    b = 1;
    for (var i = 1; i <= n; i++) {
        ress = a + b;
        a = b;
        b = ress;
        s.push(ress)
    }
    res.json({serie:s})
  });

app.get('/factorial', function(req, res){
    numero = req.query.numero
    var fact =1;
    if (numero==0){
        fact=1
    }else{
        for(i=1;i<=numero;i++){
            fact = fact*i
        }
    }
  res.json({factorial:fact});
});

app.get('/circle', function(req, res){
    numero = req.query.radio
    area = 2*Math.PI*numero
    perimetro = Math.PI*numero*numero
  res.json({area:area, perimetro:perimetro});
});

app.get('/rectangle', function(req, res){
    largo = req.query.largo
    alto = req.query.alto
    area = alto*largo
    perimetro = alto*1+largo*1
  res.json({area:area, perimetro:perimetro});
});

app.get('/triangle', function(req, res){
    lado_1 = req.query.lado_1
    lado_2 = req.query.lado_2
    base = req.query.base
    altura = req.query.altura
    area = base*altura/2
    perimetro = lado_1*1+lado_2*1+base*1
  res.json({area:area, perimetro:perimetro});
});

app.listen(3000,()=>{
    console.log("Servidor Arriba")
})