import { useState } from "react";

const AdvisoryModal = ({ advisory, onClose }) => {
  const [lang, setLang] = useState("english");

  if (!advisory) return null;

  const isHealthy = advisory.status === "Healthy";
  const isNepali = lang === "nepali";

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-zinc-900 w-[90%] max-w-3xl rounded-2xl p-6 overflow-y-auto max-h-[90vh] relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-xl"
        >
          ✕
        </button>

        {/* Language Toggle */}
        <div className="flex items-center gap-2 mb-6">
          <button
            onClick={() => setLang("english")}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
              !isNepali
                ? "bg-emerald-500 text-white"
                : "bg-white/10 text-zinc-400 hover:bg-white/20"
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLang("nepali")}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
              isNepali
                ? "bg-emerald-500 text-white"
                : "bg-white/10 text-zinc-400 hover:bg-white/20"
            }`}
          >
            नेपाली
          </button>
        </div>

        {/* Image */}
        {advisory.imageUrl && (
          <img
            src={`${import.meta.env.VITE_SERVER_URL}/${advisory.imageUrl}`}
            alt={advisory.crop}
            className="w-full h-64 object-cover rounded-xl mb-6"
          />
        )}

        {/* Title */}
        <h2 className="text-2xl font-bold text-white mb-2">
          {isNepali ? advisory.crop_nepali : advisory.crop}
        </h2>

        {/* Severity / Status */}
        <p className={`mb-4 font-semibold ${isHealthy ? "text-green-400" : "text-red-400"}`}>
          {isHealthy
            ? isNepali ? "निरोगी" : "Healthy"
            : `${isNepali ? "गम्भीरता" : "Severity"}: ${
                isNepali ? advisory.severity_nepali ?? advisory.severity : advisory.severity
              }`}
        </p>

        {/* Disease */}
        {!isHealthy && advisory.disease && (
          <p className="text-white mb-4">
            {isNepali ? "रोग" : "Disease"}:{" "}
            {isNepali ? advisory.disease_nepali ?? advisory.disease : advisory.disease}
          </p>
        )}

        {/* Symptoms */}
        {advisory.symptoms?.[lang] && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              {isNepali ? "लक्षणहरू" : "Symptoms"}
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {advisory.symptoms[lang].map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Causes */}
        {advisory.causes?.[lang] && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              {isNepali ? "कारणहरू" : "Causes"}
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {advisory.causes[lang].map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Prevention */}
        {(advisory.prevention?.[lang] || advisory.preventive_care?.[lang]) && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              {isNepali ? "बचाव" : "Prevention"}
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {(advisory.prevention?.[lang] || advisory.preventive_care?.[lang]).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Treatment */}
        {advisory.treatment_procedure?.step_by_step?.[lang] && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              {isNepali ? "उपचार" : "Treatment"}
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {advisory.treatment_procedure.step_by_step[lang].map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Immediate Actions */}
        {advisory.immediate_actions?.[lang] && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              {isNepali ? "तत्काल कदमहरू" : "Immediate Actions"}
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {advisory.immediate_actions[lang].map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Next Checkup */}
        {advisory.next_checkup?.[lang] && (
          <div className="mt-4 bg-green-900/30 border border-green-500/30 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-green-400 mb-1">
              {isNepali ? "अर्को जाँच" : "Next Checkup"}
            </h3>
            <p className="text-gray-300">{advisory.next_checkup[lang]}</p>
          </div>
        )}

        {/* Yield Impact */}
        {advisory.yield_impact && (
          <div className="mt-4 bg-red-900/20 border border-red-500/20 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-red-400 mb-1">
              {isNepali ? "उत्पादनमा असर" : "Yield Impact"}
            </h3>
            <p className="text-gray-300">
              {isNepali ? advisory.yield_impact_nepali ?? advisory.yield_impact : advisory.yield_impact}
            </p>
          </div>
        )}

        {/* Confidence */}
        {advisory.confidence && (
          <div className="mt-4">
            <div className="flex justify-between text-xs text-zinc-500 mb-1">
              <span>{isNepali ? "विश्वास" : "Confidence"}</span>
              <span>{Math.round(advisory.confidence)}%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-1.5">
              <div
                className="bg-emerald-500 h-1.5 rounded-full transition-all"
                style={{ width: `${advisory.confidence}%` }}
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdvisoryModal;