/*

FreeBSD License
---------------

Copyright 2011 Maarten Mortier. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are
permitted provided that the following conditions are met:

   1. Redistributions of source code must retain the above copyright notice, this list of
      conditions and the following disclaimer.

   2. Redistributions in binary form must reproduce the above copyright notice, this list
      of conditions and the following disclaimer in the documentation and/or other materials
      provided with the distribution.

THIS SOFTWARE IS PROVIDED BY <COPYRIGHT HOLDER> ''AS IS'' AND ANY EXPRESS OR IMPLIED
WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

The views and conclusions contained in the software and documentation are those of the
authors and should not be interpreted as representing official policies, either expressed
or implied, of <copyright holder>.

*/

MMUTest = TestCase("MMUTest");

/* Reset. */

MMUTest.prototype.setUp = function() {
    console.log("Setting up MMUTest.");
    this.mmu = new MMU();
}

MMUTest.prototype.tearDown = function() {
    console.log("Tear down MMUTest.");
}

/*
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
*/

MMUTest.prototype.testMappingUK8 = function() {
    this.mmu.reset();
    var mmu = this.mmu;
    test = function(address, expected) {
        var actual = mmu.read8(address);
        assertEquals(expected, actual);
    }

    // data fixture for generated tests
    for(i = 0; i<0x20000; i++) {
        area = (i > 0xffff ? this.mmu.user : this.mmu.kernel);
        r_addr = (i > 0xffff ? i - 0xffff : i);
        area[r_addr] = (i%255 + i%17)%255;
    }

    /** Generated from C code **/
    // Read mem 8 
    test(0x0,0);
    test(0x1555,110);
    test(0x2aaa,220);
    test(0x3fff,75);
    test(0x5554,185);
    test(0x6aa9,23);
    test(0x7ffe,133);
    test(0x9553,243);
    test(0xaaa8,98);
    test(0xbffd,191);
    test(0xd552,46);
    test(0xeaa7,156);
    test(0xfffc,11);
    test(0x11551,104);
    test(0x12aa6,214);
    test(0x13ffb,69);
    test(0x15550,179);
    test(0x16aa5,17);
    test(0x17ffa,127);
    test(0x1954f,237);
    test(0x1aaa4,92);
    test(0x1bff9,202);
    test(0x1d54e,40);
    test(0x1eaa3,150);
    test(0x1fff8,5);
    /** End generated code **/
}
