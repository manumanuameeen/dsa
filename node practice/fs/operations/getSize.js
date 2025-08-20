import fs from "fs";



async function size(filePath) {
    try {
        const stat = await fs.promises.stat(filePath)
        console.log((stat.size/1024).toFixed(2)+"kb")
        
    } catch (error) {
        console.error(error)
    }
}

size("../datas/copy.txt")