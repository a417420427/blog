"use strict";
(self["webpackChunkinterview_collection"] = self["webpackChunkinterview_collection"] || []).push([[454],{

/***/ 454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ FileDrag)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/utils/path.ts
var path = __webpack_require__(9982);
// EXTERNAL MODULE: ./src/pages/Sample/index.module.scss
var index_module = __webpack_require__(31);
;// CONCATENATED MODULE: ./src/pages/Sample/useFileDrag.ts

const useFileDrag = props => {
  const [dropFiles, setDropFiles] = (0,react.useState)([]);
  const dragEvents = (0,react.useMemo)(() => {
    const dragenter = e => {
      e.preventDefault();
      props.onDragenter && props.onDragenter(e);
    };

    const dragover = e => {
      e.preventDefault();
      props.onDragover && props.onDragover(e);
    };

    const drop = async e => {
      e.preventDefault();
      const dropFiles = await getFiles(e);
      setDropFiles(dropFiles);
      props.onDrop && props.onDrop(e);
    };

    return {
      dragenter,
      dragover,
      drop
    };
  }, []);
  (0,react.useEffect)(() => {
    document.body.addEventListener('dragenter', dragEvents.dragenter);
    document.body.addEventListener('dragover', dragEvents.dragover);
    document.body.addEventListener('drop', dragEvents.drop);
    return () => {
      document.body.removeEventListener('dragenter', dragEvents.dragenter);
      document.body.removeEventListener('dragover', dragEvents.dragover);
      document.body.removeEventListener('drop', dragEvents.drop);
    };
  }, [dragEvents]);
  return {
    dropFiles
  };
}; // 读取文件入口

async function readFileEntrySync(entry) {
  return new Promise(resolve => {
    entry.file(file => {
      resolve(file);
    });
  });
} // 读取文件夹入口


async function readDirEntrySync(entry) {
  return new Promise(resolve => {
    const fileEntries = [];
    const dirReader = entry.createReader();
    dirReader.readEntries(entries => {
      entries.forEach(entry => {
        fileEntries.push(entry);
      });
      resolve(fileEntries);
    });
  });
} // https://stackoverflow.com/questions/28487352/dragndrop-datatransfer-getdata-empty/28487486
// 保存入口 由于 DataTransfer 只在 drop的时间段存在, 所以需要提前收集文件信息


const savedEntries = e => {
  //const entries: FileEntry[] = []
  const items = e.dataTransfer && e.dataTransfer.items;

  if (!items) {
    return [];
  }

  return Array.from(items).map(item => item.webkitGetAsEntry());
}; // 处理入口文件

async function readEntry(fileEntry) {
  const files = [];

  if (fileEntry.isFile) {
    const file = await readFileEntrySync(fileEntry);
    files.push({
      file,
      fullPath: fileEntry.fullPath
    });
  } else if (fileEntry.isDirectory) {
    const fileEntries = await readDirEntrySync(fileEntry);

    for (let i = 0; i < fileEntries.length; i++) {
      const file = await readFileEntrySync(fileEntries[i]);
      files.push({
        file,
        fullPath: fileEntry.fullPath
      });
    }
  }

  return files;
}

async function getFiles(e) {
  let dropFiles = [];
  const entries = savedEntries(e);

  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    dropFiles = dropFiles.concat(await readEntry(entry));
  }

  return dropFiles;
}
;// CONCATENATED MODULE: ./src/pages/Sample/FileDrag.tsx
/* provided dependency */ var React = __webpack_require__(7294);




/* harmony default export */ const FileDrag = (() => {
  const [isInDragZoom, setIsInDragZoom] = (0,react.useState)(false);
  const dragRef = (0,react.useRef)(null);
  const onDrop = (0,react.useCallback)(e => {
    if (!dragRef.current) {
      return;
    } //const target = e.target as HTMLElement

  }, []);
  const onDragover = (0,react.useCallback)(e => {
    if (!dragRef.current) {
      return;
    }

    const isInDragZoom = () => {
      if (!dragRef.current) {
        return false;
      }

      const target = e.target;
      return dragRef.current === target, dragRef.current.contains(target);
    };

    setIsInDragZoom(isInDragZoom());
  }, []);
  const {
    dropFiles
  } = useFileDrag({
    onDrop,
    onDragover
  });
  return React.createElement("div", {
    className: index_module/* default.FileDrag */.Z.FileDrag
  }, React.createElement("div", {
    ref: dragRef,
    className: index_module/* default.DragZoom */.Z.DragZoom
  }, "\u62D6\u62FD\u4E0A\u4F20", isInDragZoom ? React.createElement("div", {
    className: index_module/* default.DragZoomMask */.Z.DragZoomMask
  }) : null), React.createElement("div", {
    className: index_module/* default.DragInfo */.Z.DragInfo
  }, dropFiles.map(dropFile => {
    const filePath = (0,path/* join */.v)(dropFile.fullPath, dropFile.file.name);
    return React.createElement("div", {
      key: filePath
    }, filePath);
  })));
});

/***/ })

}]);