/* TO-DO
const baseFormData={
    title:"",
    image:"",
    content:"",
    tags:[],
    published:true
}

const [formData, setFormData] = useState(baseFormData)

function handleFormData(e){

    const key = e.target.name
    const value = e.target.value
    const type = e.target.type
    const checked = e.target.checked

    setFormData((formData) =>{
        const newFormData = {...formData}

        type === "checkbox" && key =="tags" ? 
        (newFormData.tags = checked ? formData.tags.concat(value) : formData.tags.filter((tag) => tag!==value)) 
        : type === "checkbox" && key ==="published" ? 
        (newFormData.published = checked) 
        : (newFormData[key] = value)

        return newFormData;
    })
}

function addNewPost(){

    if(formData.title === "") return

    const newPost ={
        ...formData
    }

    axios.post(`${API_BASE_URI}posts`, newPost)
        .then(res =>{
            console.log(res)
            console.log("post aggiunto correttamente")
            setPosts([...posts, res.data])
            setFormData(baseFormData)
        })
        .catch(err =>{
            console.error(err)
        })

    //console.log(posts)
    fetchPosts()
}


            <form className={style.form} onSubmit={(e) => {e.preventDefault(); addNewPost()}} action="">
                <div className={style.formDiv}>
                    <input className={style.formField} id="title" name="title" onChange={handleFormData} type="text" placeholder="Titolo del post" value={formData.title}/>
                </div>
                <div className={style.formDiv}>
                    <input className={style.formField} id="content" name="content" onChange={handleFormData} type="text" placeholder="Descrizione del post" value={formData.content}/>
                </div>
                <div className={style.formDiv}>
                    <input className={style.formField} id="image" name="image" onChange={handleFormData} type="text" placeholder="URL immagine" value={formData.image}/>
                </div>
                <div className={style.formDiv}>
                    <input  id="tag1" name="tags" onChange={handleFormData} type="checkbox" value={"tag1"}/>
                    <label className={style.formCheckbox} htmlFor="tag1">Tag 1</label>
                    <input id="tag2" name="tags" onChange={handleFormData} type="checkbox" value={"tag2"}/>
                    <label className={style.formCheckbox} htmlFor="tag2">Tag 2</label>
                    <input id="tag3" name="tags" onChange={handleFormData} type="checkbox" value={"tag3"}/>
                    <label className={style.formCheckbox} htmlFor="tag3">Tag 3</label>
                </div>
                <div className={style.formDiv}>
                    <input id="published" name="published" onChange={handleFormData} checked={formData.published} type="checkbox"/>
                    <label htmlFor="published">Visibile</label>
                </div>
                <input className={style.submit} type="submit" value="Invia"/>
            </form>

*/