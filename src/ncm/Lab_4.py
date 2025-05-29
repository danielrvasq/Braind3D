

"""
Laboratorio 4 
Fundamentos de programacion imperactiva
Profesora Luz Estela Muñoz Ceballos
Autor Nicolas Cañar Muñoz
06 de mayo de 2025


variable entrada ce, tipo,salario
salida reporte salarioT
"""

import tkinter as tk
from tkinter import ttk

class NominaApp:
def __init__(self, root):
self.root = root
self.root.title("Ejercicio nómina determinado")
self.root.geometry("500x300")
self.root.resizable(False, False)


self.main_frame = ttk.Frame(root)
self.main_frame.pack(padx=10, pady=10, fill=tk.BOTH, expand=True)


self.empleados_frame = ttk.Frame(self.main_frame)
self.empleados_frame.pack(fill=tk.X)

ttk.Label(self.empleados_frame, text="Número de empleados:").pack(side=tk.LEFT)
self.num_empleados = tk.StringVar(value="0")
self.entry_empleados = ttk.Entry(self.empleados_frame, textvariable=self.num_empleados, state='disabled')
self.entry_empleados.pack(side=tk.LEFT, padx=5)


self.botones_frame = ttk.Frame(self.main_frame)
self.botones_frame.pack(fill=tk.X, pady=10)

self.btn_reporte = ttk.Button(self.botones_frame, text="Generar Reporte")
self.btn_reporte.pack(side=tk.LEFT, padx=5)

self.btn_salir = ttk.Button(self.botones_frame, text="Salir", command=self.salir)
self.btn_salir.pack(side=tk.LEFT, padx=5)


self.reporte_frame = ttk.Frame(self.main_frame)
self.reporte_frame.pack(fill=tk.BOTH, expand=True)

ttk.Label(self.reporte_frame, text="Reporte empleados").pack(anchor=tk.W)
self.text_reporte = tk.Text(self.reporte_frame, state='disabled')
self.text_reporte.pack(fill=tk.BOTH, expand=True)

def salir(self):
self.root.destroy()

if __name__ == "__main__":
root = tk.Tk()
app = NominaApp(root)
root.mainloop()