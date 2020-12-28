# React Drag-and-Drop with Touch (mobile) support

 - Mobile (touch) and Desktop (drag) support!
 - Easy to use.
 - Support for drag-over logic.
 - Tested... a bit. Please let us know if (when) you find bugs!

### Example code

```

import {Draggable, DropZone} from 'react-drag-or-touch-drop'

// ...

<Draggable id='drag1'><p>Drag Me!</p></Draggable>

<DropZone id='dropzone1' 
	onDrop={(e, dropInfo) => console.log("You dropped this", dropInfo)}
>
	<p>Drop here</p>
</DropZone>

```

FYI: This package was snipped out from Good-Loop's bigger bundle of React project and widget code: <https://github.com/good-loop/wwappbase.js>.
