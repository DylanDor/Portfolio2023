export const ProjectArticle = ({data, isEven}) => {
  return (
    <article className={`project_article ${isEven ? 'even' : ''}`}>
        <div className="project_img_container">
          <img
            className="project_article_img"
            src={data.img_url}
            alt=""
            srcset=""
          />
        </div>
        <div className="project_content_container">
          <h3 className="project_article_title">{data.title}</h3>
          <p className="project_article_text">
            <span className="project_article_date">({data.year})</span>{data.content}
          </p>
          <a className="project_article_link" href="#">
            VIEW PROJECT
          </a>
        </div>
      </article>
  )
}
