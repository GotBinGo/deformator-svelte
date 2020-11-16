<script>
import Container from './../base/Container.svelte';

import Side from './Side.svelte';
import store from '../common';
import { getContext, afterUpdate } from 'svelte';
import  Automerge from 'automerge';

store.set('Container', Container);
store.set('simple-modal', getContext('simple-modal'));

export let data;
export let value;
export let history = [];
export let doc = Automerge.from({data});
let doc2;

let ld;

function newTree() {
  doc = Automerge.from({data: JSON.parse(JSON.stringify(data))});
  history = Automerge.getHistory(doc)
}

function saveState() {
  doc = doc2;
  history = Automerge.getHistory(doc)
}

function backState() {
  let hist = Automerge.getHistory(doc);
  if(hist.length > 1) {
    data = JSON.parse(JSON.stringify(hist[hist.length-2].snapshot.data))
    doc = hist[hist.length-2].snapshot;
    history = Automerge.getHistory(doc)
  }
}

function Undo() {
  if(Automerge.canUndo(doc)) {
    doc = Automerge.undo(doc, 'Undo');
    data = doc.data;
    ld = JSON.stringify(data);
    history = Automerge.getHistory(doc);
  }
}


function Redo() {
  if(Automerge.canRedo(doc)) {
    doc = Automerge.redo(doc, 'Redo');
    data = doc.data;
    ld = JSON.stringify(data);
    history = Automerge.getHistory(doc);
  }
}


function revertState() {
  let hist = Automerge.getHistory(doc);
  if(hist.length > 0) {
    data = JSON.parse(JSON.stringify(hist[hist.length-1].snapshot.data))
    doc = hist[hist.length-1].snapshot;
    history = Automerge.getHistory(doc)
  }
}

function cleanse(obj, path) {
    if(obj === null) return;
    Object.keys(obj).forEach(function(key) {
        // Get this value and its type
        var value = obj[key];
        var type = typeof value;
        if (type === "object") {
            cleanse(value);
            if (value !== null && !Object.keys(value).length) {
                delete obj[key]
            }
        } else if (type === "undefined") {
            // Undefined, remove it
            obj[key] = null;
        }
    });
}

let n = 0;

function saveWait() {
  n++;
  setTimeout(x => {
    if(n == 1) {
      console.log('SAVING');
      saveState();
    }
    n--;
  },100)
}

function upd(data) {
  if(JSON.stringify(data) === ld) return;
  
  // console.log('upd', JSON.parse(JSON.stringify(arr[arr.length-1][1].snapshot.doc)));
  history = Automerge.getHistory(doc)
  // console.log('BAAAAAD', data)
  // cleanse(data);
  let dataClean = JSON.parse(JSON.stringify(data));
  console.log(dataClean);

  // console.log('CEANSED', data)

  doc2 = Automerge.change(doc, { message: !!ld ? 'Upd' : "Setup", undoable: !!ld }, doc=> {
    doc.data = dataClean;
  });
  saveWait();
  // dirty = true;
  


  ld = JSON.stringify(data)
  return;
  doc1 = Automerge.change(doc1, 'Update', doc => {
    doc.doc = {};
    trav(doc.doc, data);


    function trav(doc, data) {
      for(var a of Object.keys(data)) {
        if(Array.isArray(data[a])) {
          doc[a] = [];
          trav(doc[a], data[a]);
        } else if(data[a] === undefined) {
        }
        else if(typeof data[a] !== 'object') {
          doc[a] = data[a];
        }
        else {
          doc[a] = {};
          trav(doc[a], data[a]);
        }
      }
      return doc;
    }
    
  })

}

$: {upd(data)};

</script>

<editor style="display: flex; flex-grow: 1;">
	<div style="display: flex; flex-grow: 1; flex-direction: column">
		<Container bind:data bind:value></Container>
    </div>
    <Side bind:data bind:value bind:history></Side>
    <div>
      <button on:click={newTree}>New State</button>
      <button on:click={revertState}>Revert State</button>
      <br>
      <button on:click={Undo}>Undo State</button>
      <button on:click={Redo}>Redo State</button>
    </div>
</editor>
