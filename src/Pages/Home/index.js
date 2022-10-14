import CardWrapper from '../../Components/Card';
import './style.css'
export default function Home(){
    return (
      <div className="Container">
        <header className='Header'>
            <h2 className='title'>Cinépolis</h2>
            </header>
        <h3 className='subTitle'>Salas disponíveis</h3>

        <CardWrapper />
      </div>
    );
}