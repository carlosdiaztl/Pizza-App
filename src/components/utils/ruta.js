
export const protectedRoute = (navigate) => {
    const compras = JSON.parse(sessionStorage.getItem("compra"));
    if (compras) {
        
    }
    else{
        navigate('/');
    }
}