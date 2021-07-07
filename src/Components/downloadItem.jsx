export const DownloadItem = (props) => {
  const { url, docName } = props.document;
  const extension = url.substr(url.lastIndexOf(".") + 1);
  return (
    <div
      className="my-1 m-1 border border-2 rounded-3 d-inline-block"
      style={{ maxWidth: "300px", width:"97%" }}
    >
      <div className="ms-1 position-absolute">
        <span className="badge rounded-pill bg-primary">{extension}</span>
      </div>
      <div className="p-3 text-center">
        <div className="mb-2">
          <span>{docName}</span>
        </div>
        <a href={url} download>
          <button className="btn btn-outline-success">Download</button>
        </a>
      </div>
    </div>
  );
};
