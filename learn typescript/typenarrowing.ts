function getchai (kind: string | number) {
    if (typeof kind === "string") {
        return `You ordered a ${kind} chai.`
    } else {
        return `You ordered a chai with ${kind} grams of tea leaves.`
    }
}

function servchai(masg: string )        {   {
    if (masg.includes("grams")) {
        console.log("Serving chai with specified grams of tea leaves.")
    } else {
        console.log("Serving chai of specified kind.")
    }                                                               }
}

function orderchai(size: "small" | "medium" | "large" | number) {
    if (size === "small") {
        return 'small chai ordered.'
    }
    if (size === "medium" || size === "large") {
        return `make extra chai`
    }
    return `chai with ${size} grams of tea leaves ordered.`
        }


class kulhadchai {
    serve() {
        return "Serving chai in kulhad."

    } }

  class  ctting { 

    serve() {
        return "Cutting kulhad chai."}
     }
    function serve(chai: kulhadchai | ctting) {
    if (chai instanceof kulhadchai) {
        return chai.serve()
    }}