// ============================================================
// SINGLE SOURCE OF TRUTH — every product's content lives here.
// index.html, bundle.html, and guide.html all read from PRODUCTS
// instead of hardcoding per-product HTML. Add a new product by
// pushing one more object onto this array — no new HTML files,
// no per-page CSS edits. codeSections and guideSections are both
// plain arrays, so a product can have 2 code samples or 6 — the
// renderers loop over whatever length is actually there.
// ============================================================
const PRODUCTS = [
  {
    "id": "pdf-export-engine",
    "shortMark": "pdf22()",
    "name": "PDF Export Engine",
    "eyebrow": "Oracle APEX Utility",
    "accent": "#1DBF73",
    "accentDeep": "#12653F",
    "accentDim": "rgba(29,191,115,0.13)",
    "titleHtml": "PDF Export<br><span class=\"accent-text\">Engine</span><em>.</em>",
    "lede": "One JavaScript function that reads any Oracle APEX classic report straight out of the DOM and hands back a paginated, styled PDF — watermarks, badges, images, per-column color and alignment control, no server round-trip.",
    "boxImage": "image/pdf-engine-pakage.png",
    "heroTag": "exportToPDF22<b>(</b>options<b>)</b> — every option documented below",
    "stats": [
      {
        "n": "64",
        "l": "Parameters"
      },
      {
        "n": "6",
        "l": "Guide Sections"
      },
      {
        "n": "1",
        "l": "Function Call"
      },
      {
        "n": "0",
        "l": "Server Requests"
      }
    ],
    "codeSections": [
      {
        "kind": "steps",
        "title": "Quick Start",
        "steps": [
          {
            "title": "Drop the function in",
            "desc": "Paste the script into a page-level JavaScript function, or a static application file loaded on every page."
          },
          {
            "title": "Point it at a region",
            "desc": "Pass the static ID of the classic report region via <code>pdfRegion</code> — it reads the rendered table directly, no extra query."
          },
          {
            "title": "Call it from a button",
            "desc": "Wire it to a Dynamic Action → Execute JavaScript Code on any button, and configure the look through the parameters below."
          }
        ],
        "codeHtml": "<span class=\"c\">// Dynamic Action → Execute JavaScript Code</span>\n<span class=\"k\">exportToPDF22</span>({\n  saveToFile:          <span class=\"s\">\"Y\"</span>,\n  pdfRegion:           <span class=\"s\">\"PURCHASE-REPORT\"</span>,\n  reportHeadingCustom: <span class=\"s\">\"Purchase Report\"</span>,\n  hideColumns:         [<span class=\"s\">\"Edit\"</span>],\n  rightColumns:        [<span class=\"s\">\"Total Amount\"</span>, <span class=\"s\">\"Paid Amount\"</span>],\n  highlightColumns:    [<span class=\"s\">\"Total Amount\"</span>],\n  hideTotalRows:       [<span class=\"s\">\"Supplier Total\"</span>]\n});"
      },
      {
        "kind": "full",
        "title": "Full Reference Call",
        "sub": "All 60 parameters, in declaration order, with working example values — copy it and delete what you don't need.",
        "codeHtml": "<span class=\"k\">exportToPDF22</span>({\n  saveToFile:              <span class=\"s\">\"N\"</span>,\n  openInTab:               <span class=\"s\">\"Y\"</span>,\n  showHeaderRegion:        <span class=\"s\">\"FIRST\"</span>,\n  tableTextFont:           7,\n  tableCellPadding:        0.60,\n  tableCelllineWidth:      0.25,\n  highlightColumnfontSize: 8,\n  footerFontSize:          8,\n  headerParameterFontSize: 8,\n  CompanyName:             <span class=\"s\">\"Stay Strong\"</span>,\n  hideColumns:             [<span class=\"s\">\"Edit\"</span>],\n  imageColumns:            [<span class=\"s\">\"Image 1\"</span>, <span class=\"s\">\"Image 2\"</span>],\n  imageColumnWidth:        10,\n  imageColumnHeight:       7,\n  htmlColumns:             [<span class=\"s\">\"Status Color\"</span>],\n  coloredTextColumns:      [<span class=\"s\">\"Status\"</span>, <span class=\"s\">\"Status 2\"</span>, <span class=\"s\">\"Status 3\"</span>],\n  centerColumns:           [<span class=\"s\">\"Status\"</span>, <span class=\"s\">\"Purchase ID\"</span>, <span class=\"s\">\"Purchase Date / Time\"</span>, <span class=\"s\">\"Status 2\"</span>, <span class=\"s\">\"Status 3\"</span>, <span class=\"s\">\"Status Color\"</span>],\n  rightColumns:            [<span class=\"s\">\"Total Amount\"</span>, <span class=\"s\">\"Paid Amount\"</span>, <span class=\"s\">\"Remaining Amount\"</span>],\n  wrapColumns:             [],\n  wrapColumnWidth:         15,\n  autoFitColumns:          [<span class=\"s\">\"Category Name\"</span>, <span class=\"s\">\"Supplier\"</span>],\n  boldColumns:             [<span class=\"s\">\"Purchase ID\"</span>],\n  hideTotalRows:           [],\n  footerMode:              <span class=\"s\">\"LAST\"</span>,\n  noBorderIfEmptyCols:     [<span class=\"s\">\"Supplier\"</span>, <span class=\"s\">\"Dated\"</span>],\n  headerSlots:             [null, <span class=\"s\">\"From: \"</span> + apexGetValue(<span class=\"s\">\"P12_FROM_DATE\"</span>) + <span class=\"s\">\"  To: \"</span> + apexGetValue(<span class=\"s\">\"P12_TO_DATE\"</span>), null],\n  lineUnderHeader:         <span class=\"s\">\"N\"</span>,\n  pdfOrientation:          <span class=\"s\">\"landscape\"</span>,\n  pdfUnit:                 <span class=\"s\">\"mm\"</span>,\n  pdfFormat:               <span class=\"s\">\"a4\"</span>,\n  pdfRegion:               <span class=\"s\">\"DOWNLOAD-PDF\"</span>,\n  reportHeadingCustom:     <span class=\"s\">\"Purchase Report\"</span>,\n  logoUrl:                 <span class=\"s\">\"https://i.ibb.co/rfNnwsqK/gym-logo-template.png\"</span>,\n  logoWidth:               13,\n  logoHeight:              13,\n  showLogo:                <span class=\"s\">\"N\"</span>,\n  showWatermark:           <span class=\"s\">\"I\"</span>,\n  watermarkImage:          <span class=\"s\">\"https://i.ibb.co/rfNnwsqK/gym-logo-template.png\"</span>,\n  watermarkText:           <span class=\"s\">\"Stay Strong\"</span>,\n  watermarkOpacity:        0.10,\n  watermarkSize:           100,\n  softwareCreditDisplay:   <span class=\"s\">\"Y\"</span>,\n  softwareCredit:          <span class=\"s\">\"Software Created By: M. RIZWAN - 03237004270\"</span>,\n  showCustomTopRight:      <span class=\"s\">\"N\"</span>,\n  customTopRightText:      <span class=\"s\">\"Rizwan\"</span>,\n  tableLineColor:          [0, 191, 29],\n  tableTextColor:          [62, 3, 110],\n  headerFillColor:         [223, 255, 227],\n  headerTextColor:         [3, 101, 110],\n  alternateRowColor:       [255, 255, 255],\n  highlightRowColor:       [255, 59, 194],\n  boldTextFillColor:       [204, 229, 255],\n  boldTextColor:           0,\n  companyNameColor:        [255, 59, 194],\n  headerSlotColor:         [255, 59, 59],\n  pageInfoColor:           [3, 117, 140],\n  topRightTextColor:       [7, 56, 219],\n  footerColor:             [7, 56, 219],\n  softwareCreditColor:     [7, 56, 219],\n  watermarkColor:          [120, 120, 120],\n});"
      }
    ],
    "guideSections": [
      {
        "id": "grp-output",
        "label": "01 — Foundation",
        "title": "Output & Setup",
        "sub": "",
        "items": [
          {
            "title": "Save & Open",
            "param": "saveToFile · openInTab",
            "body": "\"Y\"/\"N\" switches — save the PDF to disk, open it in a new tab, or both. Neither is forced on; set what the button should actually do."
          },
          {
            "title": "Page Format",
            "param": "pdfOrientation · pdfUnit · pdfFormat",
            "body": "Landscape or portrait, the measurement unit every size parameter is expressed in (default mm), and the paper size (a4 by default)."
          },
          {
            "title": "Report Source",
            "param": "pdfRegion",
            "body": "The static ID of the classic report region to export. Leave empty and it grabs whichever <code>.t-Report-report</code> is currently visible on the page."
          },
          {
            "title": "Report Title",
            "param": "reportHeadingCustom",
            "body": "Overrides the PDF's header title and download filename. Without it, the function pulls whatever heading text is already on the page."
          }
        ]
      },
      {
        "id": "grp-columns",
        "label": "02 — Layout",
        "title": "Column Control",
        "sub": "",
        "items": [
          {
            "title": "Hide Columns",
            "param": "hideColumns",
            "body": "Header names to drop entirely — matches an \"Edit\" or \"Actions\" column so it never reaches the PDF, even though it's visible on screen."
          },
          {
            "title": "Force Alignment",
            "param": "centerColumns · rightColumns",
            "body": "Center or right-align a column by header name, no CSS class required in the report. Wins over class-based alignment if both are present."
          },
          {
            "title": "Wrap Text",
            "param": "wrapColumns · wrapColumnWidth",
            "body": "Locks a column to a fixed width and comma-splits its content onto separate lines — built for multi-value list columns."
          },
          {
            "title": "Auto-Fit Width",
            "param": "autoFitColumns",
            "body": "Measures the widest string in that column and sets a real fixed width, so short columns like an ID stop stretching to fill leftover page space."
          },
          {
            "title": "Border Suppression",
            "param": "noBorderIfEmptyCols",
            "body": "Drops borders and fill on a cell when it's genuinely empty in that column — keeps grouped/merged-looking reports from showing stray boxes."
          }
        ]
      },
      {
        "id": "grp-rendering",
        "label": "03 — Rendering",
        "title": "Cell Rendering",
        "sub": "",
        "items": [
          {
            "title": "Image Columns",
            "param": "imageColumns",
            "body": "Reads the &lt;img&gt; src out of the cell, preloads it, and draws it scaled to fit — for avatar, barcode, or status-icon columns."
          },
          {
            "title": "HTML Badges",
            "param": "htmlColumns",
            "body": "Reads the ACTUAL computed color, background, and border-radius off the rendered cell — via getComputedStyle, not string parsing — and draws a matching filled pill in the PDF. Works whether the color comes from inline style or a CSS class."
          },
          {
            "title": "Colored Text",
            "param": "coloredTextColumns",
            "body": "The lightweight version of HTML Badges — lifts only the text color, no background box. Built for CASE-driven status text like orange/green/red."
          },
          {
            "title": "Highlight Column",
            "param": "highlightColumns",
            "body": "Background fill only, every row, by header name — independent of Bold Column below. No CSS class needed in the report."
          },
          {
            "title": "Bold Column",
            "param": "boldColumns",
            "body": "Bold text only, every row, by header name — no fill. The two column params don't interact; a column can carry both, either, or neither."
          }
        ]
      },
      {
        "id": "grp-branding",
        "label": "04 — Identity",
        "title": "Branding & Watermark",
        "sub": "",
        "items": [
          {
            "title": "Company Identity",
            "param": "CompanyName",
            "body": "Printed top-left of every page, next to the logo if one's enabled."
          },
          {
            "title": "Logo",
            "param": "showLogo · logoUrl · logoWidth/Height",
            "body": "Preloaded before rendering starts so addImage() never receives an unfinished HTMLImageElement — no blank-logo race condition."
          },
          {
            "title": "Watermark Type",
            "param": "showWatermark",
            "body": "\"T\" renders watermarkText, \"I\" renders watermarkImage, anything else turns it off entirely — it's the type selector, not a Y/N flag."
          },
          {
            "title": "Watermark Tuning",
            "param": "watermarkOpacity · watermarkSize",
            "body": "Opacity from 0–1. Size means font size for text watermarks, width for image watermarks — height scales automatically from the image's aspect ratio."
          }
        ]
      },
      {
        "id": "grp-structure",
        "label": "05 — Structure",
        "title": "Report Structure",
        "sub": "",
        "items": [
          {
            "title": "Header Region",
            "param": "showHeaderRegion · headerSlots",
            "body": "\"FIRST\"/\"ALL\"/\"N\" — a 3-column parameter grid printed above the table, built for page item values like a date range."
          },
          {
            "title": "Top-Right Slot",
            "param": "showCustomTopRight",
            "body": "Swaps the default date + page number for custom text — the page number moves to the bottom-right so nothing overlaps."
          },
          {
            "title": "Footer & Credit",
            "param": "footerMode · softwareCredit",
            "body": "Footer notes on the last page only or every page, plus an italic credit line — both fully overridable, not hardcoded."
          },
          {
            "title": "Total Rows",
            "param": "hideTotalRows",
            "body": "Drop specific TOTAL rows by label — e.g. \"Supplier Total\" — from the PDF even though they're visible in the classic report. Others still show."
          },
          {
            "title": "Group Titles",
            "param": "highlightRowColumn",
            "body": "Restricts group-title-row detection to one named column instead of scanning every cell — faster, and avoids false positives."
          }
        ]
      },
      {
        "id": "grp-colors",
        "label": "06 — Palette",
        "title": "Color System",
        "sub": "Every visual element takes a color independently — pass a <code>[R,G,B]</code> array or a single 0–255 grayscale int.",
        "items": [
          {
            "title": "Table Colors",
            "param": "tableLineColor · tableTextColor",
            "body": "Borders and default body text — shared across the body grid, header borders, highlight rows, and the total-row divider."
          },
          {
            "title": "Header Colors",
            "param": "headerFillColor · headerTextColor",
            "body": "The column-header row's background fill and text color, independent of every other color in the table."
          },
          {
            "title": "Row Colors",
            "param": "alternateRowColor · highlightRowColor",
            "body": "Zebra-stripe fill for alternating rows, and the text color for group-title rows like a date heading."
          },
          {
            "title": "Emphasis Colors",
            "param": "boldTextFillColor · boldTextColor",
            "body": "Powers .report-bold-text, Highlight Column, and Bold Column at once — one pair of colors, three ways to trigger them."
          },
          {
            "title": "Text Element Colors",
            "param": "companyNameColor · pageInfoColor · headerSlotColor · topRightTextColor · footerColor · softwareCreditColor · watermarkColor",
            "body": "Seven more independent text colors, one per page element — company name, heading, header parameter slots, date/page number, footer, credit line, and the watermark."
          }
        ]
      }
    ],
    "pricing": [
      {
        "badge": "Script License",
        "featured": true,
        "amountHtml": "$25<span>one-time</span>",
        "descHtml": "The full <code>exportToPDF22.js</code> file — all 64 parameters, no restrictions. You wire it into your own APEX page.",
        "items": [
          "Unlimited use across your own apps",
          "Full source, no obfuscation",
          "This page as the reference guide",
          "Email support for setup questions"
        ],
        "ctaHref": "mailto:rizwan@digitalcreator.tech?subject=PDF%20Export%20Engine%20—%20Implementation%20Request&body=Hi%20Rizwan%2C%0A%0AI'd%20like%20to%20get%20the%20PDF%20Export%20Engine%20set%20up%20on%20my%20report.%0A%0AAPEX%20version%3A%0AReport%20region%3A%0ANotes%3A",
        "ctaText": "Order via Email",
        "ctaIcon": "fa-solid",
        // "ctaHref": "https://gumroad.com/l/YOUR-GUMROAD-SLUG",
        // "ctaText": "Buy on Gumroad",
        // "ctaIcon": "fa-brands",
        "priceUSD": 25
      },
       {
        "badge": "Implementation",
        "featured": true,
         "amountHtml": "$80<span>starting at</span>",
         "descHtml": "I install it against your actual classic report, match your column names and branding, and hand back a working export button.",
         "items": [
           "Everything in Script License",
           "Configured for your report, not a demo",
           "Logo, watermark & color matching",
           "Delivered as a working Dynamic Action"
         ],
         "ctaHref": "mailto:rizwan@digitalcreator.tech?subject=PDF%20Export%20Engine%20—%20Implementation%20Request&body=Hi%20Rizwan%2C%0A%0AI'd%20like%20to%20get%20the%20PDF%20Export%20Engine%20set%20up%20on%20my%20report.%0A%0AAPEX%20version%3A%0AReport%20region%3A%0ANotes%3A",
         "ctaText": "Order via Email",
         "ctaIcon": "fa-solid",
         "priceUSD": 80
       }
    ],
    "techStack": [
      "JavaScript (ES6+)",
      "jsPDF",
      "jspdf-autotable",
      "SweetAlert2",
      "Oracle APEX",
      "PL/SQL",
      "ORDS / REST",
      "HTML5",
      "CSS3"
    ],
    "mailSubject": "PDF Export Engine — Implementation Request"
  },
  {
    "id": "report-formatting-utilities",
    "shortMark": "rptFmt()",
    "name": "Report Formatting Utilities",
    "eyebrow": "Oracle APEX Utility",
    "accent": "#E0453E",
    "accentDeep": "#861d1f",
    "accentDim": "rgba(134,29,31,0.12)",
    "titleHtml": "Classic Report<br><span class=\"accent-text\">Formatting</span><em>.</em>",
    "lede": "Four JavaScript functions that clean up Oracle APEX classic report tables — hide borders on empty cells, merge and bold TOTAL rows, handle Break-Group-With reports without double-processing, and hide, blank, or remove specific total-row columns by header name.",
    "boxImage": "image/classic-Report-pakage.png",
    "heroTag": "applyReportTotalFormatting<b>(</b><b>)</b> — every function documented below",
    "stats": [
      {
        "n": "4",
        "l": "Functions"
      },
      {
        "n": "2",
        "l": "Report Types"
      },
      {
        "n": "1",
        "l": "Script File"
      },
      {
        "n": "0",
        "l": "Server Requests"
      }
    ],
    "codeSections": [
      {
        "kind": "steps",
        "title": "Quick Start",
        "steps": [
          {
            "title": "Drop the functions in",
            "desc": "Paste the script into a page-level JavaScript function, or a static application file loaded on every page. All four functions ship in one file."
          },
          {
            "title": "Pick single-report or BGW",
            "desc": "<code>applyReportTotalFormatting()</code> for a page with one report; <code>applyReportTotalFormattingAllBGW()</code> for Break-Group-With pages with several."
          },
          {
            "title": "Run it after render",
            "desc": "Wire it to a Dynamic Action → Execute JavaScript Code, on Page Load or After Refresh on the report region."
          }
        ],
        "codeHtml": "<span class=\"c\">// Dynamic Action → Execute JavaScript Code</span>\n        <span class=\"k\">applyHideBorderForEmptyCellsByHeader</span>([<span class=\"s\">\"Remarks\"</span>, <span class=\"s\">\"Notes\"</span>]);\n        <span class=\"k\">applyReportTotalFormatting</span>();"
      },
      {
        "kind": "inline",
        "title": "Border Cleanup — Call Syntax",
        "codeHtml": "<span class=\"c\">// Dynamic Action → Execute JavaScript Code</span>\n<span class=\"k\">applyHideBorderForEmptyCellsByHeader</span>([<span class=\"s\">\"Remarks\"</span>, <span class=\"s\">\"Notes\"</span>]);"
      },
      {
        "kind": "inline",
        "title": "Total Rows (Single Report) — Call Syntax",
        "codeHtml": "<span class=\"c\">// Dynamic Action → Execute JavaScript Code (single-report page)</span>\n<span class=\"k\">applyReportTotalFormatting</span>();"
      },
      {
        "kind": "inline",
        "title": "Total Rows (BGW) — Call Syntax",
        "codeHtml": "<span class=\"c\">// Dynamic Action → Execute JavaScript Code (Break-Group-With page)</span>\n<span class=\"k\">applyReportTotalFormattingAllBGW</span>();      <span class=\"c\">// no spacer rows</span>\n<span class=\"k\">applyReportTotalFormattingAllBGW</span>(<span class=\"s\">\"Y\"</span>);   <span class=\"c\">// adds spacer row after each group's last total</span>"
      },
      {
        "kind": "full",
        "title": "Column Control — Call Syntax",
        "sub": "All four <code>actionType</code>/<code>fullRow</code> combinations, from the docblock examples.",
        "codeHtml": "<span class=\"c\">// Hide the entire \"Report Total:\" row</span>\n<span class=\"k\">handleReportTotal</span>(<span class=\"s\">\"JKP\"</span>, {\n  totalRowName: <span class=\"s\">\"Report Total:\"</span>,\n  fullRow: <span class=\"k\">true</span>\n});\n\n<span class=\"c\">// Hide just the PP #, Amount, and Qty columns in that row</span>\n<span class=\"k\">handleReportTotal</span>(<span class=\"s\">\"JKP\"</span>, {\n  totalRowName: <span class=\"s\">\"Report Total:\"</span>,\n  headers: [<span class=\"s\">\"PP #\"</span>, <span class=\"s\">\"Amount\"</span>, <span class=\"s\">\"Qty\"</span>],\n  actionType: <span class=\"s\">\"hide\"</span>\n});\n\n<span class=\"c\">// Blank out (empty) the PP # and Amount columns</span>\n<span class=\"k\">handleReportTotal</span>(<span class=\"s\">\"JKP\"</span>, {\n  totalRowName: <span class=\"s\">\"Report Total:\"</span>,\n  headers: [<span class=\"s\">\"PP #\"</span>, <span class=\"s\">\"Amount\"</span>],\n  actionType: <span class=\"s\">\"null\"</span>\n});\n\n<span class=\"c\">// Remove the PP # column cell entirely</span>\n<span class=\"k\">handleReportTotal</span>(<span class=\"s\">\"JKP\"</span>, {\n  totalRowName: <span class=\"s\">\"Report Total:\"</span>,\n  headers: [<span class=\"s\">\"PP #\"</span>],\n  actionType: <span class=\"s\">\"remove\"</span>\n});"
      },
      {
        "kind": "full",
        "title": "All Four, Called Together",
        "sub": "",
        "codeHtml": "<span class=\"c\">// Dynamic Action → Execute JavaScript Code (After Refresh, on the report region)</span>\n\n<span class=\"c\">// 1) Clean up empty Remarks/Notes cells — no border/background on blanks</span>\n<span class=\"k\">applyHideBorderForEmptyCellsByHeader</span>([<span class=\"s\">\"Remarks\"</span>, <span class=\"s\">\"Notes\"</span>]);\n\n<span class=\"c\">// 2a) Single-report page — format every \"...Total:\" row</span>\n<span class=\"k\">applyReportTotalFormatting</span>();\n\n<span class=\"c\">// 2b) Break-Group-With page — same formatting, once per group, with spacer rows</span>\n<span class=\"k\">applyReportTotalFormattingAllBGW</span>(<span class=\"s\">\"Y\"</span>);\n\n<span class=\"c\">// 3) Hide the entire \"Report Total:\" row on a specific region</span>\n<span class=\"k\">handleReportTotal</span>(<span class=\"s\">\"JKP\"</span>, {\n  totalRowName: <span class=\"s\">\"Report Total:\"</span>,\n  fullRow: <span class=\"k\">true</span>\n});\n\n<span class=\"c\">// 4) Or blank out just the PP # and Amount columns instead of hiding the row</span>\n<span class=\"k\">handleReportTotal</span>(<span class=\"s\">\"JKP\"</span>, {\n  totalRowName: <span class=\"s\">\"Report Total:\"</span>,\n  headers: [<span class=\"s\">\"PP #\"</span>, <span class=\"s\">\"Amount\"</span>],\n  actionType: <span class=\"s\">\"null\"</span>\n});"
      }
    ],
    "guideSections": [
      {
        "id": "grp-cleanup",
        "label": "01 — Cleanup",
        "title": "Border Cleanup",
        "sub": "<code>applyHideBorderForEmptyCellsByHeader</code><br/>(headerNames) — strips styling from cells that are genuinely empty, in the columns you name.",
        "items": [
          {
            "title": "What It Targets",
            "param": "headerNames: string[]",
            "body": "Matches header names case-insensitively and whitespace-normalized, on the FIRST <code>.t-Report</code> on the page only."
          },
          {
            "title": "What It Strips",
            "param": "border · background · padding",
            "body": "Only on cells with genuinely empty text content — a cell with a space or a real value is left completely untouched."
          },
          {
            "title": "Call Syntax",
            "param": "applyHideBorderForEmptyCellsByHeader",
            "body": "<code>applyHideBorderForEmptyCellsByHeader(['Remarks', 'Notes']);</code> — pass as many header names as you need in one call."
          },
          {
            "title": "When To Run It",
            "param": "timing",
            "body": "After the report renders — a Dynamic Action \"Execute JavaScript Code\" on Page Load or After Refresh."
          }
        ]
      },
      {
        "id": "grp-totals",
        "label": "02 — Single Report",
        "title": "Total Rows (Single Report)",
        "sub": "<code>applyReportTotalFormatting()</code> — no arguments, formats every \"...TOTAL:\" row it finds.",
        "items": [
          {
            "title": "What It Does",
            "param": "merge · align · bold",
            "body": "Finds every row whose text ends in \"TOTAL:\", merges the label across the leading non-numeric columns, right-aligns it, and bolds it."
          },
          {
            "title": "Gap Cell Handling",
            "param": "hidden, not removed",
            "body": "Non-numeric cells past the label that aren't part of the merge get their border, background, and padding cleared instead of being deleted from the DOM."
          },
          {
            "title": "Spacer Insertion",
            "param": ".total-spacer-row",
            "body": "Inserts a blank spacer row after the LAST total row in each consecutive group — so back-to-back totals from different groups don't visually run together."
          },
          {
            "title": "Scope",
            "param": "single .t-Report only",
            "body": "Only touches the first <code>.t-Report</code> on the page. For a page with multiple report tables (Break-Group-With), use the BGW version instead."
          }
        ]
      },
      {
        "id": "grp-bgw",
        "label": "03 — Multi-Report",
        "title": "Total Rows (BGW)",
        "sub": "<code>applyReportTotalFormattingAllBGW</code><br/>(addSpacer) — same formatting, looped across every report table on the page.",
        "items": [
          {
            "title": "What It Does",
            "param": "loops every .t-Report",
            "body": "Identical merge/align/bold formatting as the single-report version, but applied to EVERY <code>.t-Report</code> — built for Break Group With pages that render one table per group."
          },
          {
            "title": "Re-Run Safe",
            "param": "dataset.formatted · .formatted-total",
            "body": "Flags each processed report and row so calling it again after an AJAX/partial refresh never double-processes the same total row."
          },
          {
            "title": "Spacer Toggle",
            "param": "addSpacer: \"Y\" / omit",
            "body": "<code>applyReportTotalFormattingAllBGW('Y')</code> inserts spacer rows after each group's last total; call it with no argument to skip spacers entirely."
          },
          {
            "title": "When To Run It",
            "param": "timing",
            "body": "Page load or after refresh, same as the single-report version — safe to wire into both since it's idempotent."
          }
        ]
      },
      {
        "id": "grp-control",
        "label": "04 — Fine Control",
        "title": "Total Row Column Control",
        "sub": "<code>handleReportTotal(reportStaticId, options)</code> — jQuery-based control over one specific total row.",
        "items": [
          {
            "title": "Target a Report",
            "param": "reportStaticId",
            "body": "First argument is the report region's Static ID (Page Designer → Identification), not a page item name."
          },
          {
            "title": "Finding The Row",
            "param": "totalRowName",
            "body": "Matched by text search — defaults to <code>'Report Total:'</code>, override it for a differently-labeled total row."
          },
          {
            "title": "Whole Row",
            "param": "fullRow: true",
            "body": "Ignores <code>headers</code> entirely and acts on the whole row — <code>actionType: 'remove'</code> deletes it, anything else hides it."
          },
          {
            "title": "Specific Columns",
            "param": "headers · actionType",
            "body": "Pass header names in <code>headers</code> and pick <code>actionType</code>: <code>'hide'</code> (CSS hide), <code>'null'</code> (blank the cell), or <code>'remove'</code> (delete the cell entirely)."
          }
        ]
      }
    ],
    "pricing": [
      {
        "badge": "Script License",
        "featured": true,
        "amountHtml": "$15<span>one-time</span>",
        "descHtml": "All four functions in one file — no restrictions. You wire them into your own APEX pages.",
        "items": [
          "Unlimited use across your own apps",
          "Full source, no obfuscation",
          "This page as the reference guide",
          "Email support for setup questions"
        ],
        "ctaHref": "mailto:rizwan@digitalcreator.tech?subject=Report%20Formatting%20Utilities%20—%20Implementation%20Request&body=Hi%20Rizwan%2C%0A%0AI'd%20like%20to%20get%20the%20Report%20Formatting%20Utilities%20set%20up%20on%20my%20report.%0A%0AAPEX%20version%3A%0AReport%20region%3A%0ASingle%20or%20BGW%3A%0ANotes%3A",
        "ctaText": "Order via Email",
        "ctaIcon": "fa-solid",
        // "ctaHref": "https://gumroad.com/l/YOUR-GUMROAD-SLUG",
        // "ctaText": "Buy on Gumroad",
        // "ctaIcon": "fa-brands",
        "priceUSD": 15
      },
       {
         "badge": "Implementation",
         "featured": true,
         "amountHtml": "$50<span>starting at</span>",
         "descHtml": "I wire it into your actual report — single or BGW — matching your header names and total-row labels.",
         "items": [
           "Everything in Script License",
           "Configured for your report, not a demo",
           "Single-report or BGW, your call",
           "Delivered as a working Dynamic Action"
         ],
         "ctaHref": "mailto:rizwan@digitalcreator.tech?subject=Report%20Formatting%20Utilities%20—%20Implementation%20Request&body=Hi%20Rizwan%2C%0A%0AI'd%20like%20to%20get%20the%20Report%20Formatting%20Utilities%20set%20up%20on%20my%20report.%0A%0AAPEX%20version%3A%0AReport%20region%3A%0ASingle%20or%20BGW%3A%0ANotes%3A",
         "ctaText": "Order via Email",
         "ctaIcon": "fa-solid",
         "priceUSD": 50
        }
    ],
    "techStack": [
      "JavaScript (ES6+)",
      "jQuery",
      "Oracle APEX",
      "PL/SQL",
      "HTML5",
      "CSS3"
    ],
    "mailSubject": "Report Formatting Utilities — Implementation Request"
  }
];

const PRODUCTS_BY_ID = Object.fromEntries(PRODUCTS.map(p => [p.id, p]));
