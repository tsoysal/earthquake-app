import './App.css';
import {useState, useEffect} from 'react';
import EarthQuakeNode from './EarthQuakeNode';

function App() {

  const [list, setList] = useState([]);

  useEffect(()=>{
    fetch("https://api.orhanaydogdu.com.tr/deprem/kandilli/live?limit=30")
      .then((response) => response.json())
      .then((data) => {setList(data.result); console.log(data)});
  }, [])

  return (
    <div className="App">

      <header>
        <h1>Türkiye Son Depremler</h1>
        <h4>Geçmiş olsun Türkiye</h4>
      </header>

      <h5>En Son : </h5>

      {list.map((node) => {
        let id = node.earthquake_id;
        return <EarthQuakeNode key={id} title={node.title} mag={node.mag} depth={node.depth} date={node.date} />
      })}

      <footer>
        <p>
          Bu web sitesi bilgilendirme amaçlı oluşturulmuş olup herhangi bir
          ticari amaç barındırmamaktadır. Bu sitedeki deprem raporları{" "}
          <a href="http://www.koeri.boun.edu.tr/scripts/lst0.asp">
            Kandilli Rasathanesi ve Deprem Araştırma Enstitüsü
          </a>{" "}
          kaynak alınarak{" "}
          <a href="mailto:berksysl.g@gmail.com">Tahaberk SOYSAL</a> tarafından
          hazırlanmıştır.
          <br />
          <br />
          "Türk Milletinin Başı Sağolsun"
        </p>
      </footer>
      
    </div>
  );
}

export default App;
