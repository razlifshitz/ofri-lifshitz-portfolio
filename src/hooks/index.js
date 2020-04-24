import { useState, useLayoutEffect, useEffect, useCallback } from 'react'

export const useScroll = () => {
    const [scroll, setScroll] = useState(0)

    useLayoutEffect(() => {
        // This holds the requestAnimationFrame reference, so we can cancel it if we wish
        let frame

        // The debounce function receives our function as a parameter
        const debounce = fn => {
            // The debounce function returns a new function that can receive a variable number of arguments
            return (...params) => {
                // If the frame variable has been defined, clear it now, and queue for next frame
                if (frame) {
                    cancelAnimationFrame(frame)
                }

                // Queue our function call for the next frame
                frame = requestAnimationFrame(() => {
                    // Call our function and pass any params we received
                    fn(...params)
                })
            }
        }

        // Reads out the scroll position and stores it in the data attribute
        // so we can use it in our stylesheets
        const storeScroll = () => {
            // document.documentElement.dataset.scroll = window.scrollY
            // setScroll(window.scrollY)
            const value =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0
            setScroll(value)
        }

        const debouncedStoreScroll = debounce(storeScroll)

        // let ticking = false
        // const test = () => {
        //     if (!ticking) {
        //         window.requestAnimationFrame(function() {
        //             storeScroll()
        //             ticking = false
        //         })

        //         ticking = true
        //     }
        // }

        // Listen for new scroll events, here we debounce our `storeScroll` function
        document.addEventListener('scroll', debouncedStoreScroll, {
            passive: true,
        })

        // Update scroll position for first time
        storeScroll()

        return () => {
            if (frame) {
                cancelAnimationFrame(frame)
            }

            document.removeEventListener('scroll', debouncedStoreScroll, {
                passive: true,
            })
        }
    }, [])

    return [
        scroll,
        value => {
            window.pageYOffset = value
            document.body.scrollTop = value
            document.documentElement.scrollTop = value
        },
    ]
}

export const useResize = (fn, dependanciesList) => {
    const memorizedFn = useCallback(fn, [...dependanciesList])

    useEffect(() => {
        window.addEventListener('resize', memorizedFn)
        memorizedFn()
        return () => {
            window.removeEventListener('resize', memorizedFn)
        }
    }, [memorizedFn])
}
