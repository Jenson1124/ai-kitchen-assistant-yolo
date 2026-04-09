from flask import *
from flask_cors import CORS, cross_origin
from ultralytics import YOLO

app = Flask(__name__)
CORS(app)


detected_classes = []
data = {}
def Ai_model_yolo():
    model = YOLO(r"./best.pt")
    results = model(r"./img.jpg") 
    for box in results[0].boxes:
        class_id = int(box.cls)
        class_name = model.names[class_id]
        detected_classes.append(class_name)
    return detected_classes;
data = {"Vegetables": " , ".join(Ai_model_yolo())}
@app.route('/home')
def home_route():
    return "This is the Home Route"


@app.route('/home/temp')
@cross_origin()
def home_temp_route():
    return render_template('index.html')


@app.route('/update', methods=['POST'])
@cross_origin()
def update_ingredients():
    req_data = request.get_json()
    new_vegetables = req_data.get('Vegetables')

    if not new_vegetables:
        return jsonify({"success": False, "message": "No Vegetables field provided"}), 400

    data['Vegetables'] = new_vegetables
    return jsonify({"success": True, "Vegetables": data['Vegetables']})

@app.route('/data', methods=['GET'])
@cross_origin()
def dataum():
    return jsonify(data)


if __name__ == '__main__':
    print(data) 
    app.run(host='0.0.0.0', port=5000, debug=True) 

