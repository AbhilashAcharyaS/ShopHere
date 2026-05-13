import axios from "axios";
import React, { useState } from "react";
import { backendURL } from "../App";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

const SortableItem = ({ id, img, index, images, setImages }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleFileChange = (e) => {
    const newImages = [...images];
    newImages[index] = e.target.files[0];
    setImages(newImages);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="relative"
    >
      {/*  IMAGE (click to upload) */}
      <div
        onClick={() => document.getElementById(`file-${index}`).click()}
        className="cursor-pointer"
      >
        <img
          className="w-20 h-20 object-contain border rounded-xl"
          src={
            img instanceof File
              ? URL.createObjectURL(img)
              : img || "https://static.vecteezy.com/system/resources/previews/055/428/287/non_2x/image-upload-icon-with-arrow-and-photo-design-vector.jpg"
          }
          alt=""
        />
      </div>

      {/*  HIDDEN INPUT */}
      <input
        id={`file-${index}`}
        type="file"
        hidden
        onChange={handleFileChange}
      />

      {/*  DRAG HANDLE (IMPORTANT) */}
      <div
        {...attributes}
        {...listeners}
        className="absolute top-0 right-0 bg-black text-white text-xs px-1 cursor-grab"
      >
        ☰
      </div>
    </div>
  );
};

const Edit = ({ token }) => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [images, setImages] = useState([null, null, null, null]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [bestSeller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const getProductInfo = async () => {
    try {
      const res = await axios.post(backendURL + "/api/product/single", {
        productId,
      });
      if (res.data.success) {
        setName(res.data.product.name);
        setDescription(res.data.product.description);
        setPrice(res.data.product.price);
        setCategory(res.data.product.category);
        setSubCategory(res.data.product.subCategory);
        setBestSeller(!!res.data.product.bestSeller);
        setSizes(res.data.product.sizes);

        setImages(res.data.product.image || [null, null, null, null]);
      } else {
        toast.error("Error fetching data!");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (!price) {
        toast.error("Price is required");
        return;
      }
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestSeller", bestSeller);
      formData.append("sizes", JSON.stringify(sizes));

      images.forEach((img, index) => {
        if (img instanceof File) {
          formData.append(`image${index + 1}`, img);
        }
      });

      const response = await axios.put(
        backendURL + "/api/product/edit/" + productId,
        formData,
        { headers: { token } },
      );
      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setImages([null, null, null, null])
        setPrice("");
        navigate("/list");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = images.findIndex((_, i) => i.toString() === active.id);
      const newIndex = images.findIndex((_, i) => i.toString() === over.id);

      setImages((items) => arrayMove(items, oldIndex, newIndex));
    }
  };

  useEffect(() => {
    getProductInfo();
  }, []);

  useEffect(() => {
  return () => {
    images.forEach(img => {
      if (img instanceof File) {
        URL.revokeObjectURL(img);
      }
    });
  };
}, [images]);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-3"
    >
      <div>
        <p className="mb-2 ">Upload Image</p>
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={images.map((_, i) => i.toString())}
            strategy={horizontalListSortingStrategy}
          >
            <div className="flex gap-2">
              {images.map((img, index) => (
                <SortableItem
                  key={index}
                  id={index.toString()}
                  img={img}
                  index={index}
                  images={images}
                  setImages={setImages}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>
      <div className="w-full">
        <p className="mb-2">Product name</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full max-w-125 px-3 py-2"
          type="text"
          placeholder="Type here"
          required
          name="name"
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Product Description</p>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full max-w-125 px-3 py-2"
          type="text"
          placeholder="Write the description here"
          required
          name="description"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Product Category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="w-full px-3 py-2"
            name="category"
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Product Sub-Category</p>
          <select
            onChange={(e) => setSubCategory(e.target.value)}
            value={subCategory}
            name="subCategory"
            className="w-full px-3 py-2"
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Product Price</p>
          <input
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            type="number"
            name="price"
            className="w-full px-3 py-2 sm:w-30"
          />
        </div>
      </div>
      <div>
        <p className="mb-2">Available Product Sizes</p>
        <div className="flex gap-3 ">
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("S")
                  ? prev.filter((item) => item !== "S")
                  : [...prev, "S"],
              )
            }
          >
            <p
              className={`${sizes.includes("S") ? "bg-green-200" : "bg-slate-100"} px-3 py-1 cursor-pointer`}
            >
              S
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("M")
                  ? prev.filter((item) => item !== "M")
                  : [...prev, "M"],
              )
            }
          >
            <p
              className={`${sizes.includes("M") ? "bg-green-200" : "bg-slate-100"} px-3 py-1 cursor-pointer`}
            >
              M
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("L")
                  ? prev.filter((item) => item !== "L")
                  : [...prev, "L"],
              )
            }
          >
            <p
              className={`${sizes.includes("L") ? "bg-green-200" : "bg-slate-100"} px-3 py-1 cursor-pointer`}
            >
              L
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("XL")
                  ? prev.filter((item) => item !== "XL")
                  : [...prev, "XL"],
              )
            }
          >
            <p
              className={`${sizes.includes("XL") ? "bg-green-200" : "bg-slate-100"} px-3 py-1 cursor-pointer`}
            >
              XL
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("XXL")
                  ? prev.filter((item) => item !== "XXL")
                  : [...prev, "XXL"],
              )
            }
          >
            <p
              className={`${sizes.includes("XXL") ? "bg-green-200" : "bg-slate-100"} px-3 py-1 cursor-pointer`}
            >
              XXL
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <input
          onChange={(e) => setBestSeller(e.target.checked)}
          checked={bestSeller}
          className="cursor-pointer"
          type="checkbox"
          id="bestSeller"
          name="bestSeller"
        />
        <label htmlFor="bestSeller">Add to bestseller</label>
      </div>

      <button
        type="submit"
        className="w-28 py-3 mt-4 bg-black text-white rounded-lg cursor-pointer"
      >
        UPDATE
      </button>
    </form>
  );
};

export default Edit;
