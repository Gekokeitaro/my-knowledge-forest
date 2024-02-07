import { QuartzTransformerPlugin } from "../types"

export const RemoveDataviewjs: QuartzTransformerPlugin = () => {
  return {
    name: "RemoveDataviewjs",
    textTransform(ctx, src) {
      // convertir el src a una cadena
      const text = src.toString()
      // usar una expresión regular para encontrar y reemplazar los bloques de dataviewjs
      const regex = /```dataviewjs[\s\S]*?```/g
      const newText = text.replace(regex, "")
      // devolver el texto modificado
      return newText
    },
  }
}
