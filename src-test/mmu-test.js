MMUTest = TestCase("MMUTest");

/* Reset. */

MMUTest.prototype.setUp = function() {
    console.log("Setting up MMUTest.");
    this.mmu = new MMU();
}

MMUTest.prototype.tearDown = function() {
    console.log("Tear down MMUTest.");
}

MMUTest.prototype.testReset = function() {
    this.mmu.reset();
    test = function(region, expected_length) {
        assertNotNull(region);
        assertEquals(expected_length, region.length);
        for(i = 0; i < region.length; i++)
            assertEquals(region[i], 0);
    }

    test(this.mmu.kernel, 0x10000);
    test(this.mmu.user, 0x1f0000);
    test(this.mmu.port, 0x10000);
    test(this.mmu.scratch, 0x400);
    test(this.mmu.reg, 0x2000);
    test(this.mmu.mirror1, 0x200000);
    test(this.mmu.mirror2, 0x200000);
    test(this.mmu.bios, 0x80000);
}


