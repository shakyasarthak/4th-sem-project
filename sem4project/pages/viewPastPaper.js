import { pastpaper } from '../components/Pastpaper';


const ViewPaper = ({ paperId }) => {
  const paper = pastpaper.find(p => p.id === paperId);

  return (
    <div>
      <h1>{paper.subjectName} {paper.semester} {paper.year}</h1>
      <a href={paper.link} target="_blank" rel="noreferrer">View Paper</a>
    
    </div>
  );
};

export default ViewPaper;
