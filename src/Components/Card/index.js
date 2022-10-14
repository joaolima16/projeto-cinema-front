import './style.css'
import axios from 'axios'
export default function CardWrapper(){
    return (
      <div class="container">
        <div class="row align-items-start">
          <div class="col">
            <div className="Card">
              <p className="roomTitle">Sala: 10</p>
              <p className="subtitle">Ingressos disponíveis: 100</p>
              <button className="btnDetails">Detalhes</button>
            </div>
          </div>
          <div class="col">
            <div className="Card">
              <p className="roomTitle">Sala: 10</p>
              <p className="subtitle">Ingressos disponíveis: 100</p>
              <button className="btnDetails">Detalhes</button>
            </div>
          </div>
          <div class="col">
            <div className="Card"></div>
          </div>
        </div>
        <div class="row align-items-start">
          <div class="col">
            <div className="Card"></div>
          </div>
          <div class="col">
            <div className="Card"></div>
          </div>
          <div class="col">
            <div className="Card"></div>
          </div>
        </div>
        <div class="row align-items-end">
          <div class="col">
          </div>
          <div class="col">
            <div className="Card"></div>
          </div>
          <div class="col">
           
          </div>
        </div>
      </div>
    );
}