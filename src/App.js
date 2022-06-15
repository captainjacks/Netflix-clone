import './App.css';
import Row from './Row';
import requests from './requests'; 
import Banner from './Banner';

function App() {
  return (
   
  <>
    
      <div  className="App">
        <Banner/>
        
        

     <Row title="NETFLIX ORIGNALS" fetchUrl={requests.fetchNetflixOriginals}
     isLargeRow
    //  isLargeRow is used to print large icons in first row
     />
     
     <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
     <Row title="TopRated" fetchUrl={requests.fetchTopRated}/>
     {/* <Row title="TopActionMovies" fetchUrl={requests.fetchActionMoviesd}/>
     <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="Documantaries" fetchUrl={requests.fetchDocumantaries}/> */}
      </div>
     
    </>
  );
 
}

export default App;
