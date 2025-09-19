const selectFileButton = document.getElementById('select-file');
const showContentButton = document.getElementById('show-content');
const filePathDisplay = document.getElementById('file-path');
const fileContentBox = document.getElementById('file-content');
const statusMessage = document.getElementById('status-message');

let selectedFilePath = '';
let selectedFileContent = '';

const setStatus = (message, type = 'info') => {
  statusMessage.textContent = message;
  statusMessage.className = `status ${type}`;
};

selectFileButton.addEventListener('click', async () => {
  setStatus('Opening file dialog...');
  try {
    const result = await window.fileAPI.openFile();
    if (result.canceled) {
      setStatus('File selection canceled.', 'warning');
      return;
    }

    selectedFilePath = result.filePath;
    selectedFileContent = result.content;

    filePathDisplay.textContent = selectedFilePath;
    fileContentBox.value = '';
    setStatus('File selected. Click "Display File Content" to view it.');
  } catch (error) {
    console.error(error);
    setStatus('An error occurred while reading the file.', 'error');
  }
});

showContentButton.addEventListener('click', () => {
  if (!selectedFilePath) {
    setStatus('Please select a file first.', 'warning');
    return;
  }

  fileContentBox.value = selectedFileContent;
  setStatus('File content displayed.');
});
