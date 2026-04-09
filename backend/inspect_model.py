from ultralytics import YOLO

model = YOLO("best.pt")

print("Model Type:", model.model)
print("Number of Classes:", len(model.names))
print("Class Names:")
for k, v in model.names.items():
    print(f"{k}: {v}")
