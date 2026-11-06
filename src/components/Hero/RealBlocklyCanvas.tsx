import React, { useEffect, useRef } from 'react';
import * as Blockly from 'blockly/core';
import 'blockly/blocks';
import * as Vi from 'blockly/msg/vi';

// Apply Vietnamese locale to Blockly
Blockly.setLocale(Vi as unknown as Record<string, string>);

// Define custom LumiSTEM Zelos theme
const lumiZelosTheme = Blockly.Theme.defineTheme('lumi-zelos-landing', {
  name: 'lumi-zelos-landing',
  base: Blockly.Themes.Zelos,
  blockStyles: {
    lumi_start: {
      colourPrimary: '#4caf50',
      colourSecondary: '#43a047',
      colourTertiary: '#2e7d32',
      hat: 'cap',
    },
    control_blocks: {
      colourPrimary: '#FFAB19',
      colourSecondary: '#E69915',
      colourTertiary: '#CC8400',
    },
    hardware_blocks: {
      colourPrimary: '#4C97FF',
      colourSecondary: '#3373CC',
      colourTertiary: '#265999',
    },
  },
  componentStyles: {
    workspaceBackgroundColour: '#ffffff',
    toolboxBackgroundColour: '#f8fafc',
    toolboxForegroundColour: '#0f172a',
    flyoutBackgroundColour: '#ffffff',
    flyoutForegroundColour: '#0f172a',
    scrollbarColour: '#cbd5e1',
    scrollbarOpacity: 0,
    insertionMarkerColour: '#0f172a',
    insertionMarkerOpacity: 0,
  },
  fontStyle: {
    family: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    weight: '600',
    size: 13,
  },
});

let blocksRegistered = false;

function ensureBlocksRegistered() {
  if (blocksRegistered) return;

  // 1. Hat Block: lumi_start
  if (!Blockly.Blocks['lumi_start']) {
    Blockly.Blocks['lumi_start'] = {
      init(this: Blockly.Block) {
        this.appendDummyInput().appendField('Khi bắt đầu (setup)');
        this.setNextStatement(true, null);
        this.setStyle('lumi_start');
      },
    };
  }

  // 2. Loop Block: lumi_forever
  if (!Blockly.Blocks['lumi_forever']) {
    Blockly.Blocks['lumi_forever'] = {
      init(this: Blockly.Block) {
        this.appendDummyInput().appendField('Lặp lại liên tục (loop)');
        this.appendStatementInput('DO').setCheck(null);
        this.setPreviousStatement(true, null);
        this.setStyle('control_blocks');
      },
    };
  }

  // 3. Pin Mode Block: esp32_pin_mode
  if (!Blockly.Blocks['esp32_pin_mode']) {
    Blockly.Blocks['esp32_pin_mode'] = {
      init(this: Blockly.Block) {
        this.appendDummyInput()
          .appendField('Cài chân')
          .appendField(
            new Blockly.FieldDropdown([
              ['GPIO 2 (LED Onboard)', '2'],
              ['GPIO 4 (Chân D4)', '4'],
              ['GPIO 5 (Chân D5)', '5'],
            ]),
            'PIN'
          )
          .appendField('làm')
          .appendField(
            new Blockly.FieldDropdown([
              ['ĐẦU RA (OUTPUT)', 'OUTPUT'],
              ['ĐẦU VÀO (INPUT)', 'INPUT'],
            ]),
            'MODE'
          );
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('hardware_blocks');
      },
    };
  }

  // 4. Digital Write Block: esp32_digital_write
  if (!Blockly.Blocks['esp32_digital_write']) {
    Blockly.Blocks['esp32_digital_write'] = {
      init(this: Blockly.Block) {
        this.appendDummyInput()
          .appendField('Ghi chân')
          .appendField(
            new Blockly.FieldDropdown([
              ['GPIO 2 (LED)', '2'],
              ['GPIO 4', '4'],
              ['GPIO 5', '5'],
            ]),
            'PIN'
          )
          .appendField('mức')
          .appendField(
            new Blockly.FieldDropdown([
              ['BẬT (HIGH)', 'HIGH'],
              ['TẮT (LOW)', 'LOW'],
            ]),
            'LEVEL'
          );
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('hardware_blocks');
      },
    };
  }

  // 5. Delay Block: lumi_delay
  if (!Blockly.Blocks['lumi_delay']) {
    Blockly.Blocks['lumi_delay'] = {
      init(this: Blockly.Block) {
        this.appendDummyInput()
          .appendField('Chờ')
          .appendField(new Blockly.FieldNumber(1000, 10, 10000), 'DELAY')
          .appendField('mili-giây (ms)');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('control_blocks');
      },
    };
  }

  blocksRegistered = true;
}

interface RealBlocklyCanvasProps {
  className?: string;
}

export const RealBlocklyCanvas: React.FC<RealBlocklyCanvasProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const workspaceRef = useRef<Blockly.WorkspaceSvg | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    ensureBlocksRegistered();

    if (workspaceRef.current) {
      workspaceRef.current.dispose();
      workspaceRef.current = null;
    }

    // Pure static SVG presentation - NO DRAG, NO EDIT, NO SCROLLBARS, NO ZOOM
    const ws = Blockly.inject(containerRef.current, {
      renderer: 'zelos',
      theme: lumiZelosTheme,
      readOnly: true, // Read-only: blocks cannot be dragged or changed
      scrollbars: false,
      trashcan: false,
      sounds: false,
      zoom: {
        controls: false,
        wheel: false,
        startScale: 1.0,
        maxScale: 1.0,
        minScale: 0.3,
        scaleSpeed: 1.0,
        pinch: false,
      },
      move: {
        scrollbars: false,
        drag: false, // Absolutely NO dragging
        wheel: false,
      },
    });

    workspaceRef.current = ws;

    try {
      ws.clear();

      // 1. Start Block (Hat) - Positioned with safe clearance from top
      const startBlock = ws.newBlock('lumi_start');
      startBlock.initSvg();
      startBlock.render();
      startBlock.moveBy(28, 36);

      // 2. Pin Mode Block
      const pinModeBlock = ws.newBlock('esp32_pin_mode');
      pinModeBlock.setFieldValue('2', 'PIN');
      pinModeBlock.setFieldValue('OUTPUT', 'MODE');
      pinModeBlock.initSvg();
      pinModeBlock.render();
      startBlock.nextConnection?.connect(pinModeBlock.previousConnection!);

      // 3. Forever Loop
      const loopBlock = ws.newBlock('lumi_forever');
      loopBlock.initSvg();
      loopBlock.render();
      pinModeBlock.nextConnection?.connect(loopBlock.previousConnection!);

      // 4. Digital Write HIGH
      const writeHigh = ws.newBlock('esp32_digital_write');
      writeHigh.setFieldValue('2', 'PIN');
      writeHigh.setFieldValue('HIGH', 'LEVEL');
      writeHigh.initSvg();
      writeHigh.render();
      const loopStatement = loopBlock.getInput('DO')?.connection;
      if (loopStatement) {
        loopStatement.connect(writeHigh.previousConnection!);
      }

      // 5. Delay 1
      const delay1 = ws.newBlock('lumi_delay');
      delay1.setFieldValue(1000, 'DELAY');
      delay1.initSvg();
      delay1.render();
      writeHigh.nextConnection?.connect(delay1.previousConnection!);

      // 6. Digital Write LOW
      const writeLow = ws.newBlock('esp32_digital_write');
      writeLow.setFieldValue('2', 'PIN');
      writeLow.setFieldValue('LOW', 'LEVEL');
      writeLow.initSvg();
      writeLow.render();
      delay1.nextConnection?.connect(writeLow.previousConnection!);

      // 7. Delay 2
      const delay2 = ws.newBlock('lumi_delay');
      delay2.setFieldValue(1000, 'DELAY');
      delay2.initSvg();
      delay2.render();
      writeLow.nextConnection?.connect(delay2.previousConnection!);

    } catch (e) {
      console.warn('Blockly AST render notice:', e);
    }

    const handleResize = () => {
      if (workspaceRef.current !== ws || !containerRef.current) return;
      Blockly.svgResize(ws);
      const bounds = ws.getBlocksBoundingBox();
      const availableWidth = containerRef.current.clientWidth - 32;
      const availableHeight = containerRef.current.clientHeight - 32;
      ws.setScale(Math.min(1, availableWidth / (bounds.right + 28), availableHeight / (bounds.bottom + 28)));
    };
    const observer = new ResizeObserver(handleResize);
    observer.observe(containerRef.current);
    const frame = window.requestAnimationFrame(handleResize);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
      if (workspaceRef.current) {
        workspaceRef.current.dispose();
        workspaceRef.current = null;
      }
    };
  }, []);

  return (
    <div className={`relative w-full rounded-xl overflow-hidden border border-gray-200/90 bg-white/95 pointer-events-none select-none cursor-default ${className}`}>
      {/* Pure SVG Presentation Container - Unmovable, Non-draggable */}
      <div
        ref={containerRef}
        className="studio-blockly-canvas"
      />
    </div>
  );
};
