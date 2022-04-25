import Pokemon from './Pokemon';

function Lineup() {
    return (
        <div className='nes-container lineup-container'>
            <Pokemon />
            <div className='space-pokemon'></div>
            <Pokemon />
            <div className='space-pokemon'></div>
            <Pokemon />
            <div className='space-pokemon'></div>
            <Pokemon />
            <div className='space-pokemon'></div>
            <Pokemon />
            <div className='space-pokemon'></div>
            <Pokemon />
        </div>
    );
  }
  
  export default Lineup;
  