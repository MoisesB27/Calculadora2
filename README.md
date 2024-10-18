# Calculadora2
Proceso Calculadora_Cientifica
    Definir opcion, numero1, numero2, resultado, respuesta, puntaje Como Real
    Definir angulo, a, b, x Como Real
	Definir base, altura, area, radio,largo, ancho, perimetro Como Real
    Definir volver Como Caracter
	volver = "s"  // Bucle de retorno.
	
			
			// Mensaje de bienvenida.
			
			Escribir "     Bienvenido a QuantumX    "
			Escribir "  La Calculadora del Futuro   "
			
			
			Mientras volver = "s" Hacer
					Limpiar Pantalla
					Escribir "QuantumX - Calculadora Científica"
					Escribir "1. Suma"
					Escribir "2. Resta"
					Escribir "3. Multiplicación"
					Escribir "4. División"
					Escribir "5. Potencia"
					Escribir "6. Raíz Cuadrada"
					Escribir "7. Seno"
					Escribir "8. Coseno"
					Escribir "9. Tangente"
					Escribir "10. Resolver ecuación de primer grado (ax + b = 0)"
					Escribir "11. Promedio"
					Escribir "12. Test de preguntas matemáticas"
					Escribir "13. Área de un Triángulo"
					Escribir "14. Área de un Círculo"
					Escribir "15. Perímetro de un Rectángulo"
					Escribir "Seleccione una opción: "
					Leer opcion
					
					
					// Condicionales 
					Si opcion >= 1 Y opcion <= 15 Entonces
						Segun opcion Hacer
							Opcion 1:  // Suma
								Escribir "Ingrese el primer número: "
								Leer numero1
								Escribir "Ingrese el segundo número: "
								Leer numero2
								resultado = numero1 + numero2
								Escribir "Resultado: ", resultado
								
								
							Opcion 2:  // Resta
								Escribir "Ingrese el primer número: "
								Leer numero1
								Escribir "Ingrese el segundo número: "
								Leer numero2
								resultado = numero1 - numero2
								Escribir "Resultado: ", resultado
								
								
							Opcion 3:  // Multiplicación
								Escribir "Ingrese el primer número: "
								Leer numero1
								Escribir "Ingrese el segundo número: "
								Leer numero2
								resultado = numero1 * numero2
								Escribir "Resultado: ", resultado
								
								
							Opcion 4:  // División
								Escribir "Ingrese el primer número: "
								Leer numero1
								Escribir "Ingrese el segundo número: "
								Leer numero2
								Si numero2 <> 0 Entonces
									resultado = numero1 / numero2
									Escribir "Resultado: ", resultado
								SiNo
									Escribir "Error: División entre cero no permitida."
								FinSi
								
								
							Opcion 5:  // Potencia
								Escribir "Ingrese la base: "
								Leer numero1
								Escribir "Ingrese el exponente: "
								Leer numero2
								resultado = numero1^numero2
								Escribir "Resultado: ", resultado
								
								
							Opcion 6:  // Raíz Cuadrada
								Escribir "Ingrese el número: "
								Leer numero1
								Si numero1 >= 0 Entonces
									resultado = raiz(numero1)
									Escribir "Resultado: ", resultado
								SiNo
									Escribir "Error: No se puede calcular la raíz de un número negativo."
								FinSi
								
								
							Opcion 7:  // Seno
								Escribir "Ingrese el ángulo en grados: "
								Leer angulo
								resultado = sen(angulo * PI / 180)  // Convertir a radianes
								Escribir "Seno(", angulo, "°) = ", resultado
								
								
							Opcion 8:  // Coseno
								Escribir "Ingrese el ángulo en grados: "
								Leer angulo
								resultado = cos(angulo * PI / 180)  // Convertir a radianes
								Escribir "Coseno(", angulo, "°) = ", resultado
								
								
							Opcion 9:  // Tangente
								Escribir "Ingrese el ángulo en grados: "
								Leer angulo
								resultado = tan(angulo * PI / 180)  // Convertir a radianes
								Escribir "Tangente(", angulo, "°) = ", resultado
								
								
							Opcion 10:  // Ecuación de primer grado (ax + b = 0)
								Escribir "Resolver ecuación de la forma ax + b = 0"
								Escribir "Ingrese el valor de a (coeficiente de x): "
								Leer a
								Escribir "Ingrese el valor de b (término independiente): "
								Leer b
								Si a <> 0 Entonces
									x = -b / a
									Escribir "La solución de la ecuación es: x = ", x
								SiNo
									Escribir "Error: a no puede ser igual a 0."
								FinSi
								
								
							Opcion 11:  // Promedio de tres números
								Definir cantidad, suma, promedio, numero Como Real
								suma <- 0
								
								Escribir "Ingrese la cantidad de datos:"
								Leer cantidad
								
								Para i <- 1 Hasta cantidad Con Paso 1
									Escribir "Ingrese el número ", i, ":"
									Leer numero
									suma <- suma + numero
								FinPara
								
								promedio <- suma / cantidad
								
								Escribir "El promedio es: ", promedio
								
								
							Opcion 12:  // Test de preguntas matemáticas
								puntaje = 0
								Escribir "Bienvenido al test de preguntas matemáticas"
								Escribir "Pregunta 1: ¿Cuánto es 2 + 2?"
								Leer respuesta
								Si respuesta = 4 Entonces
									puntaje = puntaje + 1
								FinSi
								
								
								Escribir "Pregunta 2: ¿Cuánto es 5 * 3?"
								Leer respuesta
								Si respuesta = 15 Entonces
									puntaje = puntaje + 1
								FinSi
								
								Escribir "Pregunta 3: Si restas 7 menos 2, ¿cuánto obtienes?"
								Leer respuesta
								Si respuesta = 5 Entonces
									puntaje = puntaje + 1
								FinSi
								
								Escribir "Pregunta 4: ¿Cuánto es la raíz cuadrada de 16?"
								Leer respuesta
								Si respuesta = 4 Entonces
									puntaje = puntaje + 1
								FinSi
								
								Escribir "Pregunta 5: Si tienes 8 manzanas y comes 3, ¿cuántas te quedan?"
								Leer respuesta
								Si respuesta = 5 Entonces
									puntaje = puntaje + 1
								FinSi
								
								Escribir "Has terminado el test. Tu puntaje es: ", puntaje, " de 5"
								
								
								Opcion 13:
								Escribir "Ingrese la base del triángulo:"
								Leer base
								Escribir "Ingrese la altura del triángulo:"
								Leer altura
								area <- (base * altura) / 2
								Escribir "El área del triángulo es: ", area
								
							Opcion 14: 
								Escribir "Ingrese el radio del círculo:"
								Leer radio
								area <- PI * radio * radio
								Escribir "El área del círculo es: ", area	
								
								Opcion 15:
								Escribir "Ingrese el largo del rectángulo:"
								Leer largo
								Escribir "Ingrese el ancho del rectángulo:"
								Leer ancho
								perimetro <- 2 * (largo + ancho)
								Escribir "El perímetro del rectángulo es: ", perimetro
						FinSegun
					SiNo
						Escribir "========= Erro!!! =========="
					FinSi
					
					Escribir "¿Desea realizar otra operación? (s/d): "
        Leer volver
    FinMientras
    
FinProceso
