// 📁 public/js/editMode.js

let editMode = null;

/**
 * Set edit mode with category + index info
 * @param {object} value { category, index }
 */
export function setEditMode(value) {
  editMode = value;
}

/**
 * Get current edit mode object or null
 * @returns {object|null}
 */
export function getEditMode() {
  return editMode;
}

/**
 * Clear the edit mode (after submit/update)
 */
export function clearEditMode() {
  editMode = null;
}
