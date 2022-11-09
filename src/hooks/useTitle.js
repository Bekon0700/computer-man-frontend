import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} | Computer-Man, An excellent computer service center`;
    }, [title])
};

export default useTitle;