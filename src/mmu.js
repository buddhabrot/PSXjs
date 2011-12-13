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

function MMU() {
    this.kernel =    []; /*      0x0000  -     0xffff */
    this.user =      []; /*    0x010000  -   0x1fffff */
    this.port =      []; /*  0x1f000000  - 0x1f00ffff */
    this.scratch =   []; /*  0x1f800000  - 0x1f8003ff */
    this.reg =       []; /*  0x1f801000  - 0x1f802fff */
    this.mirror1 =   []; /*  0x80000000  - 0x801fffff */
    this.mirror2 =   []; /*  0xa0000000  - 0xa01fffff */
    this.bios =      []; /*  0xbfc00000  - 0xbfc7ffff */
}

MMU.prototype.reset = function() {
    calloc = function(region, start, end) {
        var i;
        if(start >= 0 && end > start)  {
            for(i = start; i <= end; i++)
                region[i - start] = 0;
        } else {
            console.log("Faulty range called for calloc.");
        }
    }

    calloc(this.kernel, 0x0000, 0xffff);
    calloc(this.user, 0x10000, 0x1fffff);
    calloc(this.port, 0x1f000000, 0x1f00ffff);
    calloc(this.scratch, 0x1f800000, 0x1f8003ff);
    calloc(this.reg, 0x1f801000, 0x1f802fff);
    calloc(this.mirror1, 0x80000000, 0x801fffff);
    calloc(this.mirror2, 0xa0000000, 0xa01fffff);
    calloc(this.bios, 0xbfc00000, 0xbfc7ffff);
};

MMU.prototype.read8 = function() {

}

