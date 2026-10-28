import React, {useRef, useState} from 'react';
import galleries from './projectGalleries.json';
import ProjectTag from './ProjectTag';
import ProjectTechnology from './ProjectTechnology';
export default function ProjectCard({id,name,tags,technologies,description,details,links,images}){
 const dialog=useRef(null);
 const [active,setActive]=useState(0);
 const media=images || [{file:id+'.svg',alt:name+' — placeholder image'}];
 const gallery=[...media,...(galleries[id] || [])];
 const imageUrl=item=>process.env.PUBLIC_URL+'/images/engineering/'+item.file;
 const openProject=()=>{setActive(0);dialog.current.showModal();};
 const advance=direction=>setActive(index=>(index+direction+gallery.length)%gallery.length);
 const renderImages=()=> <div className={'project-media'+(media.length>1?' project-media-pair':'')}>{media.map(item=><img key={item.file} src={process.env.PUBLIC_URL+'/images/engineering/'+item.file} alt={item.alt} loading="lazy"/>)}</div>;
 return <article className="project-card">
  <button type="button" className="project-image-button" onClick={openProject} aria-label={'Read about '+name}>
   {renderImages()}
   <span className="project-hover">CLICK TO VIEW PROJECT</span>
  </button>
  <div className="project-card-copy">
   <h2 className="text-[var(--light)] text-2xl underline"><button type="button" onClick={openProject}>{name}</button></h2>
   <div className="flex gap-2 mb-3 flex-wrap">{tags.map(tag=><ProjectTag key={tag} name={tag}/>)}</div>
   <p className="project-description">{description}</p>
   <div className="flex gap-2 flex-wrap">{technologies.map(name=><ProjectTechnology key={name} name={name} image={process.env.PUBLIC_URL+'/images/engineering/'+name.toLowerCase().replaceAll(' ','-').replaceAll('+','p')+'.svg'}/>)}</div>
  </div>
  <dialog ref={dialog} className="project-dialog" aria-labelledby={id+'-title'} onClick={e=>{if(e.target===dialog.current)dialog.current.close();}}>
   <div className="dialog-content"><form method="dialog"><button className="dialog-close" aria-label="Close project details">Close ×</button></form>
    <h2 id={id+'-title'}>{name}</h2>
    {images ? <section className="project-gallery" aria-label={name+' photo gallery'} onKeyDown={event=>{if(event.key==='ArrowRight'){event.preventDefault();advance(1);}if(event.key==='ArrowLeft'){event.preventDefault();advance(-1);}}}>
     <figure>
      <img className="gallery-main-image" src={imageUrl(gallery[active])} alt={gallery[active].alt}/>
      <figcaption aria-live="polite">{gallery[active].alt} <span>— {active+1} / {gallery.length}</span></figcaption>
     </figure>
     <div className="gallery-controls"><button type="button" onClick={()=>advance(-1)} aria-label="Previous photo">← Previous</button><span>Images from my GitHub repositories</span><button type="button" onClick={()=>advance(1)} aria-label="Next photo">Next →</button></div>
     <div className="gallery-thumbnails">{gallery.map((item,index)=><button type="button" key={item.file} aria-label={'Show '+item.alt} aria-pressed={active===index} onClick={()=>setActive(index)}><img src={imageUrl(item)} alt="" loading="lazy"/></button>)}</div>
    </section> : renderImages()}
    {details.map(text=><p key={text}>{text}</p>)}
    <div className="project-links">{links.map(([label,url])=><a key={url} href={url} target="_blank" rel="noopener noreferrer">{label} ↗</a>)}</div>
   </div>
  </dialog>
 </article>
}
