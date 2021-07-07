import { DownloadItem } from "./downloadItem";

export const Downloads = () => {
  const document = [
    {
      docName: "REDUX vs MOBX",
      url: "Documents/REDUX vs MOBX.docx"
    },
    {
      docName: "Privacy Policy",
      url: "Documents/Privacy Policy.pdf"
    },
    {
      docName: "Training Plan(May 2021)",
      url: "Documents/Training Plan May 2021.xlsx"
    }
  ];
  return (
    <div className="container text-center p-3">
      {document.map((docItem) => (
        <DownloadItem document={docItem} />
      ))}
    </div>
  );
};
