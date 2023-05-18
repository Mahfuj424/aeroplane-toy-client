import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} -Aeroplnae Toy`;
    }, [title])
};

export default useTitle;