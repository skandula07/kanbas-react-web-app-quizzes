import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
interface WordEditorProps {
  content: string;
  setContent: (content: string) => void;
}
const WordEditor = ({ content, setContent }: WordEditorProps) => {
  return (
    <div className="container my-4">
      <Editor
        apiKey="9536ny0b4rq4r4v7lc6rq5blhwxpen4ubo395fobmpe6cmgs"
        value={content}
        onEditorChange={(newContent: any) => setContent(newContent)}
        init={{
          height: 300,
          menubar: true,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect " +
            "| bold italic underline | " +
            "alignleft aligncenter alignright" +
            " alignjustify | bullist" +
            " numlist outdent indent | removeformat",

          menu: {
            file: {
              title: "File",
              items: "newdocument restoredraft | preview | print ",
            },
            edit: {
              title: "Edit",
              items:
                "undo redo | cut copy paste pastetext | selectall | searchreplace",
            },
            view: {
              title: "View",
              items: "code | visualaid visualblocks | fullscreen",
            },
            insert: { title: "Insert", items: "link media | template hr" },
            format: {
              title: "Format",
              items:
                "bold italic underline strikethrough superscript subscript | formats | removeformat",
            },
            tools: { title: "Tools", items: "spellchecker code wordcount" },
            table: {
              title: "Table",
              items: "inserttable tableprops deletetable | cell row column",
            },
          },
        }}
      />
    </div>
  );
};
export default WordEditor;
