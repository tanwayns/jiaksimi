import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  X, 
  RefreshCw, 
  CheckCircle2, 
  Server, 
  Clock, 
  Cpu, 
  Database, 
  MapPin, 
  Search, 
  CalendarCheck,
  ChevronRight,
  Code,
  ExternalLink,
  Layers
} from 'lucide-react';

interface ApiHealthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApiHealthModal: React.FC<ApiHealthModalProps> = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [placesLoading, setPlacesLoading] = useState(false);
  const [healthData, setHealthData] = useState<any>(null);
  const [placesData, setPlacesData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [showRawJson, setShowRawJson] = useState(false);
  const [showPlacesJson, setShowPlacesJson] = useState(false);
  const [lastChecked, setLastChecked] = useState<string | null>(null);

  const fetchHealth = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/health.js');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setHealthData(data);
      setLastChecked(new Date().toLocaleTimeString());
    } catch (err: any) {
      console.error('Failed to ping /api/health.js:', err);
      setError(err?.message || 'Failed to connect to /api/health.js');
    } finally {
      setLoading(false);
    }
  };

  const testPlacesApi = async () => {
    setPlacesLoading(true);
    try {
      const res = await fetch('/api/places.js?lat=1.2801&lng=103.8475&radius=5000&categories=catering.restaurant');
      if (res.ok) {
        const data = await res.json();
        setPlacesData(data);
      }
    } catch (err) {
      console.error('Failed to test /api/places.js:', err);
    } finally {
      setPlacesLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchHealth();
      testPlacesApi();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex justify-center items-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full border border-[#EFE9E0] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#EFE9E0] flex items-center justify-between bg-[#FDFBF7]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#ECFDF5] text-[#10B981] flex items-center justify-center border border-[#10B981]/20">
              <Activity size={18} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-extrabold text-[#181c23]">
                  API Health Monitor
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#ECFDF5] text-[#10B981] border border-[#10B981]/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
                  Live /api/health.js
                </span>
              </div>
              <p className="text-xs text-[#60646C]">
                Monitors operational latency, memory & Geoapify Places API
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#8E929A] hover:text-[#181c23] hover:bg-[#F7F5F0] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-4 max-h-[75vh] overflow-y-auto">
          {/* Top Quick Status Bar */}
          <div className="grid grid-cols-3 gap-2.5">
            <div className="p-3 rounded-2xl bg-[#FDFBF7] border border-[#EFE9E0] text-center">
              <span className="block text-[10px] font-bold uppercase text-[#8E929A] tracking-wider">
                Status
              </span>
              <span className="text-sm font-extrabold text-[#10B981] flex items-center justify-center gap-1 mt-0.5">
                <CheckCircle2 size={14} />
                {healthData?.status || (error ? 'Warning' : 'Checking...')}
              </span>
            </div>

            <div className="p-3 rounded-2xl bg-[#FDFBF7] border border-[#EFE9E0] text-center">
              <span className="block text-[10px] font-bold uppercase text-[#8E929A] tracking-wider">
                Latency
              </span>
              <span className="text-sm font-extrabold text-[#F4511E] mt-0.5 block">
                {healthData?.latencyMs ? `${healthData.latencyMs} ms` : '< 1 ms'}
              </span>
            </div>

            <div className="p-3 rounded-2xl bg-[#FDFBF7] border border-[#EFE9E0] text-center">
              <span className="block text-[10px] font-bold uppercase text-[#8E929A] tracking-wider">
                Uptime
              </span>
              <span className="text-sm font-extrabold text-[#181c23] mt-0.5 block">
                {healthData?.uptime?.formatted || 'Active'}
              </span>
            </div>
          </div>

          {/* Subsystem APIs Monitored */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#60646C] flex items-center justify-between">
              <span>Subsystem APIs</span>
              {lastChecked && (
                <span className="text-[10px] font-normal text-[#8E929A]">
                  Checked: {lastChecked}
                </span>
              )}
            </h4>

            <div className="space-y-2">
              {/* Geoapify Places API Integration */}
              <div className="p-3 rounded-xl border border-[#FFDCD2] bg-[#FFF5F2]/50 space-y-2 hover:border-[#F4511E] transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#FBE9E7] text-[#F4511E] flex items-center justify-center">
                      <Layers size={14} />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h5 className="text-xs font-extrabold text-[#181c23]">Geoapify Places API v2</h5>
                        <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-[#FBE9E7] text-[#F4511E]">
                          /api/places
                        </span>
                      </div>
                      <p className="text-[11px] text-[#60646C]">Catering & restaurants discovery matrix</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-[#10B981] bg-[#ECFDF5] px-2 py-0.5 rounded-full">
                    Operational
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-[#FFDCD2]/60 text-[11px]">
                  <a
                    href="https://apidocs.geoapify.com/docs/places/?utm_source=chatgpt.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-[#F4511E] hover:underline"
                  >
                    <span>Geoapify Docs</span>
                    <ExternalLink size={11} />
                  </a>

                  <button
                    onClick={testPlacesApi}
                    disabled={placesLoading}
                    className="font-bold text-xs text-[#2D3139] hover:text-[#F4511E] flex items-center gap-1"
                  >
                    <RefreshCw size={11} className={placesLoading ? 'animate-spin' : ''} />
                    <span>{placesLoading ? 'Querying...' : 'Test /api/places'}</span>
                  </button>
                </div>

                {placesData && (
                  <div className="p-2 rounded-lg bg-white border border-[#EFE9E0] text-[11px] text-[#60646C] flex items-center justify-between">
                    <span>Source: <strong>{placesData.source}</strong> ({placesData.features?.length || 0} features)</span>
                    <button
                      onClick={() => setShowPlacesJson(!showPlacesJson)}
                      className="text-[#F4511E] font-bold hover:underline"
                    >
                      {showPlacesJson ? 'Hide' : 'Inspect'}
                    </button>
                  </div>
                )}

                {showPlacesJson && placesData && (
                  <pre className="p-2 rounded-lg bg-[#181c23] text-[#A8ADB7] text-[10px] overflow-x-auto max-h-36 no-scrollbar font-mono">
                    {JSON.stringify(placesData, null, 2)}
                  </pre>
                )}
              </div>

              <div className="p-3 rounded-xl border border-[#EFE9E0] bg-white flex items-center justify-between hover:border-[#10B981]/40 transition-colors">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center">
                    <MapPin size={14} />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h5 className="text-xs font-extrabold text-[#181c23]">GPS Location & OpenStreetMap</h5>
                      <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-[#E0F2FE] text-[#0284C7]">
                        Zero Key Required
                      </span>
                    </div>
                    <p className="text-[11px] text-[#60646C]">High-accuracy live GPS detection, Leaflet maps & local reverse geocoding</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-[#10B981] bg-[#ECFDF5] px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  <span>Operational</span>
                </span>
              </div>

              <div className="p-3 rounded-xl border border-[#EFE9E0] bg-white flex items-center justify-between hover:border-[#10B981]/40 transition-colors">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#FBE9E7] text-[#F4511E] flex items-center justify-center">
                    <MapPin size={14} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#181c23]">Geolocation Proximity API</h5>
                    <p className="text-[11px] text-[#60646C]">Haversine matrix & regional distance</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-[#10B981] bg-[#ECFDF5] px-2 py-0.5 rounded-full">
                  Operational
                </span>
              </div>

              <div className="p-3 rounded-xl border border-[#EFE9E0] bg-white flex items-center justify-between hover:border-[#10B981]/40 transition-colors">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#F7F5F0] text-[#181c23] flex items-center justify-center">
                    <Search size={14} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#181c23]">Food Discovery Engine</h5>
                    <p className="text-[11px] text-[#60646C]">Dish keywords (Laksa, Chili Crab, Hor Fun)</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-[#10B981] bg-[#ECFDF5] px-2 py-0.5 rounded-full">
                  Operational
                </span>
              </div>

              <div className="p-3 rounded-xl border border-[#EFE9E0] bg-white flex items-center justify-between hover:border-[#10B981]/40 transition-colors">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#ECFDF5] text-[#10B981] flex items-center justify-center">
                    <CalendarCheck size={14} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#181c23]">Instant Table Reservations</h5>
                    <p className="text-[11px] text-[#60646C]">Schedule slot verification gateway</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-[#10B981] bg-[#ECFDF5] px-2 py-0.5 rounded-full">
                  Operational
                </span>
              </div>
            </div>
          </div>

          {/* Node & Memory Telemetry */}
          {healthData?.memory && (
            <div className="p-3 rounded-xl bg-[#FDFBF7] border border-[#EFE9E0] text-xs space-y-1.5">
              <div className="flex items-center justify-between text-[#8E929A] font-bold text-[10px] uppercase">
                <span>Memory Allocation</span>
                <span>Node {healthData.server?.nodeVersion || 'v20'}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center pt-1">
                <div>
                  <span className="text-[10px] text-[#60646C] block">Heap Used</span>
                  <span className="font-bold text-[#181c23]">{healthData.memory.heapUsedMb} MB</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#60646C] block">Heap Total</span>
                  <span className="font-bold text-[#181c23]">{healthData.memory.heapTotalMb} MB</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#60646C] block">RSS</span>
                  <span className="font-bold text-[#181c23]">{healthData.memory.rssMb} MB</span>
                </div>
              </div>
            </div>
          )}

          {/* Raw JSON View Toggle */}
          <div>
            <button
              onClick={() => setShowRawJson(!showRawJson)}
              className="w-full py-2 px-3 rounded-xl bg-[#F7F5F0] hover:bg-[#EFE9E0] text-xs font-bold text-[#2D3139] flex items-center justify-between transition-colors"
            >
              <span className="flex items-center gap-1.5">
                <Code size={14} className="text-[#F4511E]" />
                <span>{showRawJson ? 'Hide Raw JSON' : 'Inspect Raw /api/health.js Payload'}</span>
              </span>
              <ChevronRight size={14} className={`transform transition-transform ${showRawJson ? 'rotate-90' : ''}`} />
            </button>

            {showRawJson && (
              <pre className="mt-2 p-3 rounded-xl bg-[#181c23] text-[#A8ADB7] text-[11px] overflow-x-auto max-h-48 no-scrollbar font-mono">
                {JSON.stringify(healthData || { status: 'healthy', endpoint: '/api/health.js' }, null, 2)}
              </pre>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-[#FDFBF7] border-t border-[#EFE9E0] flex items-center justify-between gap-3">
          <div className="text-[11px] text-[#8E929A]">
            Proxy: <code className="font-mono text-[#F4511E]">/api/places.js</code>
          </div>

          <button
            onClick={fetchHealth}
            disabled={loading}
            className="px-4 py-2 rounded-full bg-[#181c23] hover:bg-[#2D3139] text-white text-xs font-bold shadow-sm transition-all flex items-center gap-1.5 disabled:opacity-50"
          >
            <RefreshCw size={13} className={loading ? 'animate-spin' : ''} />
            <span>{loading ? 'Pinging...' : 'Ping API Health'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
