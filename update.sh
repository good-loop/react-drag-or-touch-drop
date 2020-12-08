
echo "Assuming you're a Good-Loop dev with wwappbase.js..."

echo "// DO NOT EDIT!! This is a copied file" > /tmp/DragDrop.jsx
cat src/js/DragDrop.jsx >> /tmp/DragDrop.jsx
cp /tmp/DragDrop.jsx src/js/DragDrop.release.jsx

#cp ../wwappbase.js/base/utils/assert.js src/utils/
#cp ../wwappbase.js/base/utils/miscutils.ts src/utils/
#cp ../wwappbase.js/base/utils/printer.js src/utils/
 echo "TODO run build/compile/whatever"
