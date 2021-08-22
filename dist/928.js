"use strict";
(self["webpackChunkinterview_collection"] = self["webpackChunkinterview_collection"] || []).push([[928],{

/***/ 7044:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.savedEntries = exports.useDragFile = void 0;
const react_1 = __webpack_require__(7294);
const useDragFile = (props) => {
    const [dropFiles, setDropFiles] = react_1.useState([]);
    const dragEvents = react_1.useMemo(() => {
        const dragenter = (e) => {
            e.preventDefault();
            props && props.onDragenter && props.onDragenter(e);
        };
        const dragover = (e) => {
            e.preventDefault();
            props && props.onDragover && props.onDragover(e);
        };
        const drop = async (e) => {
            e.preventDefault();
            const dropFiles = await getFiles(e);
            setDropFiles(dropFiles);
            props && props.onDrop && props.onDrop(e);
        };
        return {
            dragenter,
            dragover,
            drop,
        };
    }, []);
    react_1.useEffect(() => {
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
        dropFiles,
    };
};
exports.useDragFile = useDragFile;
// 读取文件入口
async function readFileEntrySync(entry) {
    return new Promise((resolve) => {
        entry.file((file) => {
            resolve(file);
        });
    });
}
// 读取文件夹入口
async function readDirEntrySync(entry) {
    return new Promise((resolve) => {
        const fileEntries = [];
        const dirReader = entry.createReader();
        dirReader.readEntries((entries) => {
            entries.forEach((entry) => {
                fileEntries.push(entry);
            });
            resolve(fileEntries);
        });
    });
}
// https://stackoverflow.com/questions/28487352/dragndrop-datatransfer-getdata-empty/28487486
// 保存入口 由于 DataTransfer 只在 drop的时间段存在, 所以需要提前收集文件信息
const savedEntries = (e) => {
    const items = e.dataTransfer && e.dataTransfer.items;
    if (!items) {
        return [];
    }
    return Array.from(items).map((item) => item.webkitGetAsEntry());
};
exports.savedEntries = savedEntries;
// 处理入口文件
async function readEntry(fileEntry) {
    let files = [];
    if (fileEntry.isFile) {
        const file = await readFileEntrySync(fileEntry);
        console.log(fileEntry.fullPath)
        files.push({
            file,
            fullPath: fileEntry.fullPath,
        });
    }
    else if (fileEntry.isDirectory) {
        const fileEntries = await readDirEntrySync(fileEntry);
        for (let i = 0; i < fileEntries.length; i++) {
            const entry = fileEntries[i];
            files = files.concat(await readEntry(entry));
        }
    }
    return files;
}
async function getFiles(e) {
    let dropFiles = [];
    const entries = exports.savedEntries(e);
    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        dropFiles = dropFiles.concat(await readEntry(entry));
    }
    return dropFiles;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 3928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var _a417420427_use_drag_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7044);
/* provided dependency */ var React = __webpack_require__(7294);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const [isInDragZoom, setIsInDragZoom] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const dragRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const onDrop = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    if (!dragRef.current) {
      return;
    } //const target = e.target as HTMLElement

  }, []);
  const onDragover = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
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
  } = (0,_a417420427_use_drag_file__WEBPACK_IMPORTED_MODULE_2__.useDragFile)({
    onDrop,
    onDragover
  });
  return React.createElement("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default.FileDrag */ .Z.FileDrag
  }, React.createElement("div", {
    ref: dragRef,
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default.DragZoom */ .Z.DragZoom
  }, "\u62D6\u62FD\u4E0A\u4F20", isInDragZoom ? React.createElement("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default.DragZoomMask */ .Z.DragZoomMask
  }) : null), React.createElement("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1__/* .default.DragInfo */ .Z.DragInfo
  }, dropFiles.map(dropFile => {
    const filePath = dropFile.fullPath;
    return React.createElement("div", {
      key: filePath
    }, filePath);
  })));
});

/***/ })

}]);