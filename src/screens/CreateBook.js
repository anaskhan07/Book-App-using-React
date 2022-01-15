import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

function CreateBook() {

  const history = useHistory()

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("");
  const [pages, setPages] = useState("");
  const [images, setImage] = useState(null);

  const url = "https://floran-book-api.herokuapp.com/"

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }

  let publishBlog = async () => {
    let formData = new FormData()
    if (name !== "" && author !== "" && content !== "" && price !== "" && pages !== "" && images !== null) {

      formData.append("name", name)
      formData.append("author", author)
      formData.append("description", content)
      formData.append("price", price)
      formData.append("pages", pages)
      formData.append("cover", images)

      await axios.post(url, formData, config).then(
        (res) => {

          setImage(null)
          setName("")
          setPrice("")
          setAuthor("")
          setPages("")
          setContent("")

          history.push("/")

        }
      ).catch(
        err => console.log(err)
      )
    } else {
      alert("Fill the data properly")
    }
  }

  return (
    <div className="container mx-auto mt-5">
      <div className="row">
        <div className="col-12">
          <h6>Book Cover</h6>
        </div>
        <div className="col-12">
          <input
            type="file"
            accept="image/*"
            className="form-control inputField"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="col-12">
          <h6>Book Name</h6>
        </div>
        <div className="col-12">
          <input
            type="text"
            placeholder="Name of Book here..."
            className="inputField"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-12">
          <input
            type="text"
            placeholder="Author Name here..."
            className="inputField"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="col-12">
          <input
            type="text"
            placeholder="Price here..."
            className="inputField"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="col-12">
          <input
            type="text"
            placeholder="No. of Pages here...??"
            className="inputField"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
          />
        </div>
        <div className="col-12">
          <textarea
            type='text'
            placeholder="Write something about the Book"
            className="inputField"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="float-end">
          <button className="btn btn-outline-dark" onClick={publishBlog}>Publish</button>
        </div>
      </div>
    </div>
  );
}

export default CreateBook
