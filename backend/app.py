from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app)


# WEATHER RISK RECOMMENDATIONS

recommendations = {

    "rain":
    "Heavy rainfall conditions detected. Possibility of flooding and waterlogging.",

    "lightning":
    "Lightning and thunderstorm risk detected. Atmospheric instability may increase.",

    "hail":
    "Hailstorm conditions detected. Crop and vehicle damage may occur.",

    "snow":
    "Snowfall conditions detected. Transportation and visibility may be affected.",

    "fog":
    "Low visibility fog conditions detected. Travel disruption may occur.",

    "fogsmog":
    "Air pollution and fog conditions detected. Environmental quality may reduce.",

    "sandstorm":
    "Sandstorm risk detected. Strong winds and dust may affect visibility.",

    "cloudy":
    "Heavy cloud concentration detected. Rainfall possibility may increase.",

    "clear":
    "Clear weather conditions detected. Weather appears stable and safe.",

    "shine":
    "Bright sunny weather detected. Normal climate conditions observed.",

    "sunrise":
    "Pleasant atmospheric conditions detected. Temperature may gradually rise.",

    "frost":
    "Frost conditions detected. Surface freezing may affect roads and crops.",

    "dew":
    "High moisture concentration detected. Humidity levels may increase.",

    "rainbow":
    "Rainfall activity appears reduced. Mixed sunlight and rain conditions detected.",

    "rime":
    "Severe freezing conditions detected. Ice crystal accumulation possible.",

    "glaze":
    "Freezing rain conditions detected. Roads may become slippery."
}

@app.route("/")
def home():
    return "Climate AI Backend is Running Successfully!"
@app.route("/predict", methods=["POST"])
def predict():

    try:

        if "file" not in request.files:

            return jsonify({

                "success": False,

                "prediction": "No image uploaded"

            })

        file = request.files["file"]

        filename = file.filename.lower()


        # SIMPLE WEATHER PREDICTION

        if "rain" in filename:

            result = "rain"

        elif "fog" in filename:

            result = "fog"

        elif "snow" in filename:

            result = "snow"

        elif "lightning" in filename:

            result = "lightning"

        elif "hail" in filename:

            result = "hail"

        elif "sandstorm" in filename:

            result = "sandstorm"

        elif "cloud" in filename:

            result = "cloudy"

        elif "clear" in filename:

            result = "clear"

        elif "frost" in filename:

            result = "frost"

        elif "dew" in filename:

            result = "dew"

        elif "rainbow" in filename:

            result = "rainbow"

        elif "rime" in filename:

            result = "rime"

        elif "glaze" in filename:

            result = "glaze"

        elif "sunrise" in filename:

            result = "sunrise"

        else:

            result = "shine"


        return jsonify({

            "success": True,

            "prediction": result,

            "recommendation":
            recommendations[result]

        })

    except Exception as e:

        return jsonify({

            "success": False,

            "prediction": "Backend Error",

            "error": str(e)

        })


if __name__ == "__main__":

    app.run(debug=True)