	// Copyright 2004-present Facebook. All Rights Reserved.

'use strict';

// 如果我们需要mock node的核心模块（如fs或者path），
// 那么还是需要显示的调用jest.mock(‘path’) ，
// 因为核心的node模块默然是不被mock的
jest.mock('fs');

describe('listFilesInDirectorySync', () => {
  const MOCK_FILE_INFO = {
    '/path/to/file1.js': 'console.log("file1 contents");',
    '/path/to/file2.txt': 'file2 contents',
  };

  beforeEach(() => {
    // Set up some mocked out file info before each test
    require('fs').__setMockFiles(MOCK_FILE_INFO);
  });

  it('includes all files in the directory in the summary', () => {
    const FileSummarizer = require('../FileSummarizer');
    const fileSummary = FileSummarizer.summarizeFilesInDirectorySync(
      '/path/to'
    );

    expect(fileSummary.length).toBe(2);
  });
});
