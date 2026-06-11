import { useState } from "react";

import axios from "axios";

import "../styles/WeatherRisk.css";

import { useNavigate } from "react-router-dom";

function WeatherRisk() {

  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(null);

  const [preview, setPreview] = useState(null);

  const [prediction, setPrediction] = useState("");

  const [recommendation, setRecommendation] = useState("");

  const [loading, setLoading] = useState(false);



  const handleImageChange = (e) => {

    const file = e.target.files[0];

    setSelectedImage(file);

    setPreview(URL.createObjectURL(file));

  };



  const handlePrediction = async () => {

    if(!selectedImage){

      alert("Please upload an image");

      return;
    }

    const formData = new FormData();

    formData.append("file", selectedImage);

    try {

      setLoading(true);

      const response = await axios.post(

        "http://127.0.0.1:5000/predict",

        formData,

        {
          headers:{
            "Content-Type":"multipart/form-data"
          }
        }
      );

      setPrediction(response.data.prediction);

      setRecommendation(response.data.recommendation);

      setLoading(false);

    } catch(error){

      console.log(error);

      setLoading(false);

      alert("Backend connection failed");

    }

  };



  return (

    <div className="weather-risk-container">

      <div className="overlay">

        <h1>Extreme Weather Risk Prediction</h1>

        <p className="subtitle">

          Upload a climate image and analyze future weather risks using AI

        </p>



        <div className="upload-box">

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />



          {preview && (

            <img
              src={preview}
              alt="preview"
              className="preview-image"
            />

          )}



          <button onClick={handlePrediction}>

            Predict Climate Risk

          </button>

        </div>



        {loading && (

          <div className="loading">

            Analyzing Climate Risk...

          </div>

        )}



        {prediction && (

          <div className="result-box">

            <h2>Prediction</h2>

            <p>{prediction}</p>



            <h2>Climate Risk Analysis</h2>

            <p>{recommendation}</p>

          </div>

        )}
<div style={{ marginTop: "30px" }}>

  <button
    className="assistant-btn"
    onClick={() => navigate("/weather-assistant")}
  >

    Open AI Weather Assistant

  </button>

</div>
      </div>

    </div>

  );
}

export default WeatherRisk;