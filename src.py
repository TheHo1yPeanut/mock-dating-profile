from sanic import Sanic, Request
from sanic.response import text
from sanic_ext import render

app = Sanic("Application1")
app.static("/", "static/")

class Profile:
    def __init__(self, name, age, job, desc, slider, pic) -> None:
        self.name = name
        self.age = age
        self.job = job
        self.desc = desc
        self.slider = slider
        self.pic = pic

yaoMing = Profile("Yao Ming", "46", "Basketballer", "Hello, I am Yao Ming. I am from china, glory to the motherland! I play basketball for our glorious leader", 7, "img/YaoMing.jpg")
robertKlein = Profile("Robert Klein", "6", "Pro-procrastinator", "I am robert klein and i love eating snus! I also love long walks on the beach with my schitzofrenia hallucinations", 4, "img/RobertKlein.jpg")

@app.get("/yaoming")
@app.ext.template("profile.html")
async def template_test(request):
    return {"profile":yaoMing}

@app.get("/robertklein")
@app.ext.template("profile.html")
async def template_test2(request):
    return {"profile":robertKlein}