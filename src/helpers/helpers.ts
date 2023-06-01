export function useFlashData(campo: string): any {
    //flash sucesso
    const flashData = sessionStorage.getItem(`flash-${campo}`);
    console.log(`flash-${campo}`, JSON.parse(flashData));
    if (flashData) {
        sessionStorage.removeItem(`flash-${campo}`);
        return JSON.parse(flashData);
    }
    return null;
}

//======
export function useSetFlashData(campo: string, valor: any) {
    console.log(`flash-${campo}`, JSON.stringify(valor));
    sessionStorage.setItem(`flash-${campo}`, JSON.stringify(valor));
}