// Creating an HTML element before specific other element (before the open tag of the element)
$("h1").before("<button>New button</button>");

// Creating an HTML element after specific other element (after the closing tag of the element)
$("h1").after("<button>Button after h1</button>");

// Creating an HTML element on the left(before the content of h1, after the open tag of h1) of specific other element
$("h1").prepend("<button>On the left</button>")

// Creating an HTML element on the right(after the content, before closing tag </h1>) of specific other element
$("h1").append("<button>On the right</button>")

// Removing element/s with jQuery
$("button").remove();
