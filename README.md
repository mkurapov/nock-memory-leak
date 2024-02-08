**Nock 13.5.1 memory leak (with `--detectLeaks` Jest argument)**:

1. `pnpm i`
2. `pnpm test`
3. Confirm output:

```sh
max ~/nock-memory-leak  $ pnpm test

> memory-leak@1.0.0 test /Users/max/nock-memory-leak
> jest --detectLeaks

 FAIL  ./memory-leak.test.ts
  ● Test suite failed to run

    EXPERIMENTAL FEATURE!
    Your test suite is leaking memory. Please ensure all references are cleaned.

    There is a number of things that can leak memory:
      - Async operations that have not finished (e.g. fs.readFile).
      - Timers not properly mocked (e.g. setInterval, setTimeout).
      - Keeping references to the global scope.

      at onResult (node_modules/.pnpm/@jest+core@29.7.0/node_modules/@jest/core/build/TestScheduler.js:150:18)
      at node_modules/.pnpm/@jest+core@29.7.0/node_modules/@jest/core/build/TestScheduler.js:254:19
      at node_modules/.pnpm/emittery@0.13.1/node_modules/emittery/index.js:363:13
          at Array.map (<anonymous>)
      at Emittery.emit (node_modules/.pnpm/emittery@0.13.1/node_modules/emittery/index.js:361:23)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        0.282 s
Ran all test suites.
 ELIFECYCLE  Test failed. See above for more details.
```
