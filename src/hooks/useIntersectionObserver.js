import { useEffect } from "react"

if (typeof window !== `undefined`) {
  require("intersection-observer")
}

const useIntersectionObserver = ({ target, onIntersect, threshold = 1.0 }) => {
  useEffect(() => {
    if (!target.current) {
      return
    }

    const observer = new IntersectionObserver(onIntersect, {
      root: null,
      rootMargin: "0px",
      threshold,
    })

    if (!target) {
      throw new Error("No target specified")
    }

    observer.observe(target.current)

    return () => {
      observer.unobserve(target.current)
    }
  }, [target])
}

export default useIntersectionObserver
