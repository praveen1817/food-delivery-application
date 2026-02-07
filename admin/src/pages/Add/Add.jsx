import { assets } from '../../assets/assets';
import './Add.css';
import React, { useEffect } from 'react'
import axios from 'axios'

const Add = () => {
    const [image, setImage] = React.useState(false);

    const [data, setData] = React.useState({
        name: '',
        description: '',
        price: "",
        category: 'Salad'
    })
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
    }

    useEffect(() => {
        console.log(data);
    }, [data])

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("price", Number(data.price));
        formData.append("description", data.description);
        formData.append("category", data.category);
        formData.append("image", image);
        try {
            const response = await axios.post('http://localhost:4000/api/food/add', formData);
            if (response.data.success) {
                setData(
                    {
                        name: '',
                        description: '',
                        price: "",
                        category: 'Salad'
                    }
                )
                setImage(false);
            }
            console.log("The Data Added Successfully")

        }catch(err){
            console.log(err)
            console.log("Internal Server Error Ocuured")
        }

    }
    return (
        <div className="add">
            <form className="flex-col">
                <div className="add-image-upload flex-col" >
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
                    </label>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" hidden required id="image" />
                </div>
                <div className="add-product-name flex-col">
                    <p>Product Name</p>
                    <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Product Name' />
                </div>
                <div className="add-product-description flex-col">
                    <p>Description</p>
                    <textarea onChange={onChangeHandler} name="description" value={data.description} rows='6' placeholder='write Description about Product' required></textarea>
                </div>
                <div className="add-category-price">
                    <div className="add-category flex-col" >
                        <p>Product Category</p>
                        <select onChange={onChangeHandler} value={data.category} name="category">
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Sanwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure Veg">Pure Veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>
                        </select>
                    </div>
                    <div className="add-price flex-col">
                        <p>Product Price</p>
                        <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='$20' />
                    </div>
                </div>
                <button type='submit' onClick={onSubmitHandler} className="add-btn">Submit</button>
            </form>
        </div>
    )
}

export default Add;